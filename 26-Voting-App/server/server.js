'use strict'

var express = require('express')
var MongoClient = require('mongodb').MongoClient
var path = require('path')
var http = require('http')
var normalizePort = require('normalize-port')
require('dotenv').config()
var flash = require('connect-flash')
var session = require('express-session')

var api = require('./api')

// Create app
var app = express()
app.use(session({
  secret: 'fcc-voting-app',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 30 * 60 * 1000 }
}))
app.use(flash())

// Create server
var server = http.createServer(app)

// Set port
var port = normalizePort(process.env.SERVER_PORT || '3000')
app.set('port', port)

// Log listener
function onListening () {
  var addr = server.address()
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  console.log('Listening on ' + bind)
}

// Start server
server.listen(app.get('port'))
server.on('listening', onListening)

// Serve homepage
app.use('', express.static(path.join(process.cwd()))) // May need to be path.join(process.cwd(), 'public')

// Connect database
var dbURI = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD + '@' + process.env.DB_URL + ':' + process.env.DB_PORT + '/' + process.env.DB_NAME
MongoClient.connect(dbURI, { useNewUrlParser: true }, function (err, client) {
  if (err) {
    console.error(err)
  } else {
    var db = client.db(process.env.DB_NAME)
    var pollsCollection = process.env.POLLS_COLLECTION
    db.createCollection(pollsCollection)
    api(app, db, pollsCollection)
  }
})
