'use strict'

var https = require('https')
var passport = require('passport')
var TwitterStrategy = require('passport-twitter').Strategy
var appUrl = process.env.APP_URL
var yelpApiKey = process.env.YELP_API_KEY
var twitterConsumerKey = process.env.TWITTER_CONSUMER_KEY
var twitterConsumerSecret = process.env.TWITTER_CONSUMER_SECRET

module.exports = function (app, db, dbBars, dbUsers) {
  var user = {
    id: undefined,
    sn: undefined
  }
  var bars = db.collection(dbBars)
  var users = db.collection(dbUsers)
  var loc

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

  passport.use(new TwitterStrategy(
    {
      consumerKey: twitterConsumerKey,
      consumerSecret: twitterConsumerSecret,
      callbackURL: `${appUrl}/api/auth/callback`
    },
    function (token, tokenSecret, profile, cb) {
      user.id = profile.id_str
      user.sn = profile.screen_name
      users.findOneAndUpdate(
        { 'id': user.id },
        {
          'id': user.id,
          'sn': user.sn
        },
        {
          upsert: true,
          returnNewDocument: true
        },
        function (err, user) {
          cb(err, user)
        }
      )
    }
  ))

  var authRes

  app.get('/api/auth', function (req, res) {
    authRes = res
    passport.authenticate('twitter')
  })

  app.get('/api/auth/callback',
    passport.authenticate('twitter', { failureRedirect: '/failed' }),
    function (req, res) {
      res.redirect('/')
      authRes.json(user)
    }
  )

  /*
  app.get('/api/auth', function (req, res) {
    id = req.query.id

    var method = 'POST'
    var protocol = 'https:'
    var baseUrl = 'api.twitter.com'
    var urlPath = '/oauth/request_token'
    var oauthCallback = encodeURIComponent(`${appUrl}/api/auth/callback`)
    var oauthConsumerKey = encodeURIComponent(twitterConsumerKey)
    var oauthNonce = encodeURIComponent(newNonce())
    var oauthSignature
    var oauthSignatureMethod = encodeURIComponent('HMAC-SHA1')
    var oauthTimestamp = encodeURIComponent(Math.round(Date.now() / 1000).toString())
    var oauthVersion = encodeURIComponent('1.0')

    var sigParamStr = `oauth_callback=${oauthCallback}&oauth_consumer_key=${oauthConsumerKey}&oauth_nonce=${oauthNonce}&oauth_signature_method=${oauthSignatureMethod}&oauth_timestamp=${oauthTimestamp}&oauth_version=${oauthVersion}`

    var sigBaseStr = `${encodeURIComponent(method)}&${encodeURIComponent(`${protocol}//${baseUrl}${urlPath}`)}&${encodeURIComponent(sigParamStr)}`

    var signingKey = `${encodeURIComponent(twitterConsumerSecret)}&${encodeURIComponent(twitterTokenSecret)}`

    var signature = crypto.createHmac('sha1', signingKey).update(sigBaseStr).digest('base64')

    oauthSignature = encodeURIComponent(signature)

    var options = {
      protocol: protocol,
      hostname: baseUrl,
      path: `${urlPath}`,
      method: method,
      headers: {
        'Accept': 'application/json',
        'Authorization': oauthSignature
      }
    }

    var newReq = https.request(options, function (resp) {
      console.log('headers')
      console.log(resp.headers)
      console.log('status code')
      console.log(resp.statusCode)
      console.log('status message')
      console.log(resp.statusMessage)
      var chunks = []
      var data

      resp.on('data', function (d) {
        chunks.push(d)
      })

      resp.on('error', function (e) {
        console.log('err')
        console.error(e.message || e.error || e)
      })

      resp.on('end', function () {
        data = Buffer.concat(chunks).toString('utf8')
        console.log('data')
        console.log(data)
        res.json(data)
      })
    })
    newReq.end()
  })
  */
}
