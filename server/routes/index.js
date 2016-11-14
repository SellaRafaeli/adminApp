var express = require('express');
var router  = express.Router();

var clientSideRoutes = ['/','/dashboard','/users','/heroes','/users/:id','/posts','posts/:_id']


router.get(clientSideRoutes, (req, res, next) => {
  res.sendfile('./index.html');
});

router.get(['/ping', '/ping2'], function (req, res, next) {
  var val = 123;  
  res.send({ pong: true, val: val, foo: 'bar1', mongo: 'mongo', users: 123});
});

module.exports = router;