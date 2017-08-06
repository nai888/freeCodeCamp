'use strict'

var https = require('https')
var GraphQLClient = require('graphql-request').GraphQLClient

module.exports = function (app, db, collection) {
  var blankUser = {
    loggedin: false,
    login: undefined,
    name: undefined
  }
  var user = blankUser
  var token
  var clientID = process.env.gitHubID
  var clientSecret = process.env.gitHubSecret

  app.get('/auth/github', function (req, res) {
    var code = req.query.code

    var options = {
      protocol: 'https:',
      hostname: 'github.com',
      method: 'POST',
      path: '/login/oauth/access_token?client_id=' + clientID + '&client_secret=' + clientSecret + '&code=' + code,
      headers: {
        'Accept': 'application/json'
      }
    }

    var newReq = https.request(options, function (resp) {
      var data

      resp.on('data', function (chunk) {
        data = JSON.parse(chunk.toString('utf8'))
      })

      resp.on('error', function (e) {
        console.error(e.message || e.error || e)
      })

      resp.on('end', function () {
        token = data.access_token
        getUserData(token)
      })
    })
    newReq.end()

    function getUserData (token) {
      var client = new GraphQLClient('https://api.github.com/graphql', {
        headers: {
          'Authorization': 'token ' + token,
          'User-Agent': 'nai888'
        }
      })

      var query = '{\nviewer {\nlogin\nname\n}\n}'

      client.request(query).then(function (data) {
        user.login = data.viewer.login
        user.name = data.viewer.name

        if (user.login && user.name) {
          user.loggedin = true
        }

        res.redirect(`${process.env.appUrl}/loggedin/${user.login}/${user.name}`)
      })
    }
  })

  app.get('/api/logout', function (req, res) {
    user = blankUser
    var options = {
      protocol: 'https:',
      hostname: 'github.com',
      method: 'DELETE',
      path: '/applications/' + clientID + '/tokens/' + token,
      headers: {
        'Authorization': 'token ' + token,
        'User-Agent': 'nai888'
      }
    }
    https.request(options)
  })

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
