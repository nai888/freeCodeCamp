'use strict'

var express = require('express')
var mongoose = require('mongoose')
var passport = require('passport')
var path = require('path')
var http = require('http')
var normalizePort = require('normalize-port')
require('dotenv').load()

// Create app
var app = express()

// Create server
var server = http.createServer(app)

// Set port
var port = normalizePort(process.env.PORT || '3000')
app.set('port', port)

// Connect database
var dbURI = 'mongodb://' + process.env.dbuser + ':' + process.env.dbpassword + '@' + process.env.dburl + ':' + process.env.dbport + '/' + process.env.dbname
mongoose.connect(dbURI)
mongoose.Promise = global.Promise

// Initialize passport
app.use(passport.initialize())

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
