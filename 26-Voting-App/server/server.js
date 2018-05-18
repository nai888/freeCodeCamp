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
