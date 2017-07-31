'use strict'

var http = require('http')

module.exports = function (app, db, collection) {
  var currentState
  var api = 'https://github.com/login/oauth'
  var clientID = process.env.gitHubID
  var clientSecret = process.env.gitHubSecret
  var callback = process.env.gitHubCallback
  var appUrl = process.env.appUrl

  app.get('/auth/github', function (req, res) {
    var state = (Math.floor(Math.random() * 9000000) + 1000000).toString()
    currentState = state
    var apiUrl = api + '/authorize?client_id=' + clientID + '&redirect_uri=' + callback + '/auth/github/callback&state=' + state + '&allow_signup=true'

    http.get(apiUrl)
  })

  app.get('/auth/github/callback', function (req, res) {
    var code = req.params.code
    var state = req.params.state

    if (state !== currentState) {
      console.error('States did not match!')
    } else {
      http.post(api + '/access_token?client_id=' + clientID + '&client_secret=' + clientSecret + '&code=' + code + '&state=' + currentState, function (res) {
        var token = res.params.access_token
        getUserData(token)
      })
    }
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
    http.get(options, function (req, res) {
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
