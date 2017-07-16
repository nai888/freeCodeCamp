var express = require('express')
var http = require('http')
var normalizePort = require('normalize-port')

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
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ?
    'pipe ' + addr :
    'port ' + addr.port;
  console.log('Listening on ' + bind);
}

// Parse request header
function ipParser(data) {
  var ip = data.split(':')
  return ip[ip.length - 1].trim()
}

function languageParser(data) {
  return data.split(',')[0].trim()
}

function softwareParser(data) {
  return data.split(/[\(\)]/)[1].trim()
}

app.get('/', function (req, res) {
  res.json({
    'ipaddress': ipParser(req.ip),
    'language': languageParser(req.headers['accept-language']),
    'software': softwareParser(req.headers['user-agent'])
  })
})
