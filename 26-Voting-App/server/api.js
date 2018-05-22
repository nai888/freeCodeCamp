'use strict'

var cors = require('cors')
var https = require('https')
var GraphQLClient = require('graphql-request').GraphQLClient

module.exports = function (app, db, pollsCollection, usersCollection) {
  var blankUser = {
    loggedin: false,
    login: undefined,
    name: undefined
  }
  var user = blankUser
  var token
  var clientID = process.env.gitHubID
  var clientSecret = process.env.gitHubSecret
  var appUrl = process.env.appUrl
  var redir
  var polls = db.collection(pollsCollection)
  var users = db.collection(usersCollection)

  app.get('/auth/github', function (req, res) {
    redir = req.query.url
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientID}`)
  })

  app.get('/auth/github/callback', function (req, res) {
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

        res.redirect(`${appUrl}/loggedin/${user.login}/${user.name}?redir=${redir}`)
      })
    }
  })

  users.findOne({ 'username': 'nai888' }).then((user) => {
    console.log(user)
  }) // temporary, logs nai888 user data to console upon server start

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

  var corsOptions = {
    origin: appUrl
  }

  app.get('/api/polls', cors(corsOptions), function (req, res) {
    var name = req.query.name

    if (name) {
      polls.find({ 'owner': name }, { '_id': 0 }).sort({ '_id': 1 }).toArray(function (err, docs) {
        if (err) {
          console.error(err)
        } else {
          res.json(docs)
        }
      })
    } else {
      polls.count().then(function (num) {
        res.send(num.toString())
      })
    }
  })

  app.options('/api/poll', cors(corsOptions))

  app.get('/api/poll', cors(corsOptions), function (req, res) {
    var id = +req.query.id

    polls.findOne({ 'id': id }).then(function (poll) {
      res.json(poll)
    })
  })

  app.delete('/api/poll', cors(corsOptions), function (req, res) {
    var id = +req.query.id

    polls.deleteOne({ 'id': id }).then(function (result) {
      res.send(result)
    })
  })
}
