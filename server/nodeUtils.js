var express   = require('express');
var crypto    = require('crypto');

//functions
log           = console.log
logThis       = logIt  = (res) => console.log(res);

niceId        = () => { return crypto.randomBytes(4).toString('hex') };
sendThis = sendIt = function(responseObj) {
  return function(result) { 
    responseObj.send(result);
  }
}

ok = "ok"

sendOK = function(res) { 
  return function(data) {
    var ok = 'ok'
    res.send({ok, data})
  }  
}
// sendThis      = sendIt = (responseObj) => {return (result) => {responseObj.send(result); } }