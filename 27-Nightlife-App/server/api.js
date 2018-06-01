'use strict'

var https = require('https')
var yelpApiKey = process.env.YELP_API_KEY

module.exports = function (app, db, collection) {
  var user
  var bars = db.collection(collection)

  app.get('/api/bars', function (req, res) {
    var loc = req.query.loc

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

    var yelpReq = https.request(options, function (resp) {
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
    yelpReq.end()
  })
}
