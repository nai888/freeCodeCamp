'use strict'

var https = require('https')
var appUrl = process.env.APP_URL
var yelpApiKey = process.env.YELP_API_KEY

module.exports = function (app, db, collection) {
  var user
  var bars = db.collection(collection)
  var loc
  var id

  app.get('/api/bars', function (req, res) {
    loc = req.query.loc

    var options = {
      protocol: 'https:',
      hostname: 'api.yelp.com',
      path: `/v3/businesses/search?location=${encodeURIComponent(loc)}&categories=bars&sort_by=distance`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${yelpApiKey}`,
        'Accept': 'application/json'
      }
    }

    var newReq = https.request(options, function (resp) {
      var chunks = []
      var data

      resp.on('data', function (d) {
        chunks.push(d)
      })

      resp.on('error', function (e) {
        console.error(e.message || e.error || e)
      })

      resp.on('end', function () {
        data = JSON.parse(Buffer.concat(chunks))
        res.json(data.businesses)
      })
    })
    newReq.end()
  })

  app.get('/api/auth', function (req, res) {
    id = req.query.id

    var options = {
      protocol: 'https:',
      hostname: 'api.twitter.com',
      path: `/oauth/request_token?callback=${appUrl}/api/callback`,
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      }
    }

    var newReq = https.request(options, function (resp) {
      var chunks = []
      var data

      resp.on('data', function (d) {
        chunks.push(d)
      })

      resp.on('error', function (e) {
        console.error(e.message || e.error || e)
      })

      resp.on('end', function () {
        data = JSON.parse(Buffer.concat(chunks))
        console.log(data)
        res.json(data)
      })
    })
    newReq.end()
  })
}
