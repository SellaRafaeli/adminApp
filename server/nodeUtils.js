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
// sendThis      = sendIt = (responseObj) => {return (result) => {responseObj.send(result); } }