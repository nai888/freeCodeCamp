'use strict'

require('dotenv').config()
var express = require('express')
var path = require('path')
var http = require('http')
var normalizePort = require('normalize-port')
var MongoClient = require('mongodb').MongoClient

var api = require('./api')

var dbURI = 'mongodb://' + process.env.dbuser + ':' + process.env.dbpassword + '@' + process.env.dburl + ':' + process.env.dbport + '/' + process.env.dbname

// Create app
var app = express()

// Start server
var server = http.createServer(app)

// Set port
var port = normalizePort(process.env.PORT || '3000')
app.set('port', port)

// Set up server
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
app.use('/', express.static(path.join(__dirname, 'public')))

// Handle api
MongoClient.connect(dbURI, function (err, db) {
  if (err) {
    console.log(err)
  } else {
    var collection = (process.env.collection).toString()
    db.createCollection(collection)
    api(app, db, collection)
  }
})
