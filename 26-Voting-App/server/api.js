'use strict'

var cors = require('cors')
var https = require('https')
var GraphQLClient = require('graphql-request').GraphQLClient
var ObjectId = require('mongodb').ObjectID

module.exports = function (app, db, pollsCollection) {
  var blankUser = {
    loggedin: false,
    login: undefined,
    name: undefined
  }
  var user = blankUser
  var token
  var clientID = process.env.GITHUB_ID
  var clientSecret = process.env.GITHUB_SECRET
  var appUrl = process.env.APP_URL
  var redir
  var polls = db.collection(pollsCollection)
  var corsOptions = {
    origin: appUrl
  }

  // Logging in
  app.get('/api/auth/github', cors(corsOptions), function (req, res) {
    redir = req.query.url
    res.json(`https://github.com/login/oauth/authorize?client_id=${clientID}`)
  })

  app.get('/api/auth/github/callback', cors(corsOptions), function (req, res) {
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

        res.json(`/loggedin/${user.login}/${user.name}?redir=${redir}`)
      })
    }
  })

  // Logging out
  app.get('/api/logout', cors(corsOptions), function (req, res) {
    user = blankUser
    /* var options = {
      protocol: 'https:',
      hostname: 'github.com',
      method: 'DELETE',
      path: '/applications/' + clientID + '/tokens/' + token,
      headers: {
        'Authorization': 'token ' + token,
        'User-Agent': 'nai888'
      }
    }
    https.request(options, (resp) => console.log(`logged out: ${resp}`)) */
  })

  // Loading the polls
  app.get('/api/polls', cors(corsOptions), function (req, res) {
    var name = req.query.name
    var options = name ? { 'owner': name } : null

    // If there's a name parameter, return all the polls owned by that user, otherwise return all polls
    polls.find(options).sort({ '_id': 1 }).toArray(function (err, docs) {
      if (err) {
        console.error(err)
      } else {
        res.json(docs)
      }
    })
  })

  // Load a single poll
  app.get('/api/poll', cors(corsOptions), function (req, res) {
    var id = req.query.id

    polls.findOne({ '_id': ObjectId(id) }).then(function (poll) {
      res.json(poll)
    })
  })

  // Add a poll
  app.post('/api/poll', cors(corsOptions), function (req, res) {
    var poll = JSON.parse(req.query.poll)

    polls.insert(poll, function (err, doc) {
      if (err) {
        console.error(err)
      } else {
        res.json(doc.ops[0]._id)
      }
    })
  })

  // Update a poll with new answers or votes
  app.put('/api/poll', cors(corsOptions), function (req, res) {
    var id = req.query.id
    var answers = JSON.parse(req.query.answers)

    polls.findAndModify(
      { '_id': ObjectId(id) },
      { '_id': 1 },
      { $set: { 'answers': answers.answers } },
      { new: true },
      function (err, data) {
        if (err) {
          console.error(err)
        } else {
          res.json(data.value)
        }
      }
    )
  })

  // Delete a poll
  app.delete('/api/poll', cors(corsOptions), function (req, res) {
    var id = req.query.id

    polls.deleteOne({ '_id': ObjectId(id) }).then(function (result) {
      res.send(result)
    })
  })
}
