var express = require('express')
var path = require('path')
var http = require('http')
var normalizePort = require('normalize-port')
var moment = require('moment');
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
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}

// Serve webpage
app.use('/', express.static(path.join(__dirname, 'public')))

// Timestamp Microservice
app.get('/:datestr', function (req, res) {
  var datestr = req.params.datestr
  var date

  if (/^\d{8,}$/.test(datestr)) {
    date = moment(datestr, 'X')
  } else {
    date = moment(datestr, 'MMMM Do, YYYY', 'en')
  }

  if (date.isValid()) {
    res.json({
      'unix': date.format('X'),
      'natural': date.format('MMMM Do, YYYY')
    })
  } else {
    res.json({
      'unix': null,
      'natural': null
    })
  }
})
