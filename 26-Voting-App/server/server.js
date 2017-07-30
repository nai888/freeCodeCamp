'use strict'

var express = require('express')
var MongoClient = require('mongodb').MongoClient
var passport = require('passport')
var path = require('path')
var http = require('http')
var normalizePort = require('normalize-port')
require('dotenv').config()

var api = require('./api')

// Create app
var app = express()

// Create server
var server = http.createServer(app)

// Set port
var port = normalizePort(process.env.PORT || '3000')
app.set('port', port)

// Start server
server.listen(app.get('port'))
server.on('listening', onListening)

// Log listener
function onListening () {
  var addr = server.address()
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  console.log('Listening on ' + bind)
}

// Serve homepage
app.use('', express.static(path.join(process.cwd(), 'dist')))

// Connect database
var dbURI = 'mongodb://' + process.env.dbuser + ':' + process.env.dbpassword + '@' + process.env.dburl + ':' + process.env.dbport + '/' + process.env.dbname
MongoClient.connect(dbURI, function (err, db) {
  if (err) {
    console.error(err)
  } else {
    var collection = process.env.collection
    db.createCollection(collection)
    api(app, db, collection)
  }
})

// Initialize passport
app.use(passport.initialize())
