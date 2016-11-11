var express   = require('express');
var crypto    = require('crypto');

//functions
log           = console.log
logThis       = logIt  = (res) => console.log(res);

niceID        = () => { return crypto.randomBytes(4).toString('hex') };

sendThis = sendIt = function(responseObj) {
  return function(result) { 
    responseObj.send(result);
  }
}

ok = "ok"

sendOK = function(res) { 
  return function(data) {
    var ok = 'ok';
    res.send({ok})
  }  
}
// sendThis      = sendIt = (responseObj) => {return (result) => {responseObj.send(result); } }