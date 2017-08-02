'use strict'

var https = require('https')

module.exports = function (app, db, collection) {
  var api = 'https://github.com/login/oauth'
  var clientID = process.env.gitHubID
  var clientSecret = process.env.gitHubSecret
  var appUrl = process.env.appUrl
  var token

  app.get('/auth/github/callback', function (req, res) {
    var code = req.params.code

    var options = {
      hostname: api + '/access_token?client_id=' + clientID + '&client_secret=' + clientSecret + '&code=' + code,
      headers: {
        Accept: 'application/json'
      }
    }
    https.get(options, function (req, res) {
      console.log(res)
      token = res.access_token
      console.log(token)
      getUserData(token)
    })
    res.redirect(appUrl)
  })

  function getUserData (token) {
    var options = {
      protocol: 'https',
      hostname: 'api.github.com',
      path: '/user',
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: token
      }
    }
    console.log('sending data')
    https.post(options, function (req, res) {
      console.log(res)
    })
  }

  var polls = db.collection(collection)

  app.get('/api/getpolls', function (req, res) {
    polls.find({}, { '_id': 0 }).sort({ '_id': 1 }).toArray(function (err, docs) {
      if (err) {
        console.error(err)
      } else {
        res.set({ 'Access-Control-Allow-Origin': 'http://localhost:4200' })
        res.json(docs)
      }
    })
  })
}
