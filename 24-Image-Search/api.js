'use strict'

var http = require('https')
require('dotenv').config()

module.exports = function (app, db, collection) {
  var searches = db.collection(collection)

  app.get('/search/:query', handleQuery)

  function handleQuery (req, res) {
    var query = req.params.query
    var offset = Number(req.query.offset) // Captures the # in ?offset=#
    if (isNaN(offset)) {
      offset = undefined
    }

    var apiPath = '/3/gallery/search/top?q=' + encodeURIComponent(query)

    var apiOptions = {
      'method': 'GET',
      'hostname': 'api.imgur.com',
      'port': null,
      'path': apiPath,
      'headers': {
        'authorization': 'Client-ID ' + process.env.clientid
      }
    }

    var request = http.request(apiOptions, function (resp) {
      var chunks = []

      resp.on('data', function (chunk) {
        chunks.push(chunk)
      })

      resp.on('end', function () {
        var buf = JSON.parse(Buffer.concat(chunks).toString('utf8'))
        var start = offset > 0 ? (offset - 1) * 5 : 0
        var page = buf.data.slice(start, start + 5)
        res.json(page)
      })
    })

    var now = new Date()

    var date = now.getMonth() + 1 + '/' + now.getDate() + '/' + now.getFullYear() + ' ' + now.getHours() + ':' + now.getMinutes()

    var insert = {
      'term': query,
      'offset': offset,
      'when': date
    }

    searches.insert(insert, function (err) {
      if (err) console.log(err)
    })

    request.end()
  }

  app.get('/latest', handleLatest)

  function handleLatest (req, res) {
    searches.find({}, { '_id': 0 }).sort({ '_id': -1 }).limit(10).toArray(function (err, docs) {
      if (err) {
        console.log(err)
      } else {
        res.json(docs)
      }
    })
  }
}
