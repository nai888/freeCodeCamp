'use strict'

var express = require('express')
var path = require('path')
var http = require('http')
var normalizePort = require('normalize-port')
var multer = require('multer')
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

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
app.use('/', express.static(path.join(__dirname)))

// Handle upload
app.post('/', upload.single('file'), function (req, res) {
  res.send('File is ' + req.file.size + ' bytes')
})
