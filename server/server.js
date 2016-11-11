#!/usr/bin/env node

var app   = require('./app');
var http  = require('http');
var port  = 3000;

app.set('port', port);

var server = http.createServer(app);

server.listen(port);

server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
  console.log("error", error)
}

function onListening() {
  console.log('Listening on port '+port)
}
