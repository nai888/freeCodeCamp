'use strict'

var isUri = require('is.uri')

module.exports = function (app, db, collection) {
  app.get('/:id', handleId)
  app.get('/new/:url*', handleUrl)

  function handleUrl (req, res) {
    var inputURL = req.params.url
    if (inputURL === 'http:') {
      res.json({
        'error': 'please exclude http:// from your URL'
      })
    } else if (inputURL === 'https:') {
      res.json({
        'error': 'please exclude https:// from your URL'
      })
    } else if (!isUri('https://' + inputURL)) {
      res.json({
        'error': 'invalid URL provided'
      })
    } else {
      newURL(inputURL, res)
    }
  }

  function newURL (url, res) {
    var links = db.collection(collection)
    links.findOne({ 'fullUrl': url }, function (err, doc) {
      if (err) {
        res.json({
          'error': err
        })
      } else {
        if (doc) {
          res.json({
            'fullUrl': doc.fullUrl,
            'id': doc.id
          })
        } else {
          links.find().count().then(function (count) {
            var insert = {
              'fullUrl': url,
              'id': (count)
            }
            links.insert(insert, function (err, result) {
              if (err) {
                res.json({
                  'error': err
                })
              } else {
                res.json({
                  'fullUrl': insert.fullUrl,
                  'id': insert.id
                })
              }
            })
          })
        }
      }
    })
  }

  function handleId (req, res) {
    var inputid = req.params.id
    routeURL(+inputid, res)
  }

  function routeURL (id, res) {
    var links = db.collection(collection)
    links.findOne({
      'id': id
    }, function (err, doc) {
      if (err) {
        res.json({
          'error': err
        })
      } else if (doc) {
        res.redirect('https://' + doc.fullUrl)
      } else {
        res.json({
          'error': 'shortened URL does not exist'
        })
      }
    })
  }
}
