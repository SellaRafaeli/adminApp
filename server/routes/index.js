var express = require('express');
var router  = express.Router();

router.get('/', (req, res, next) => {
  res.sendfile('./index.html');
});

router.get('/ping', function (req, res, next) {
  var val = 123;
  Users.findOne({}).then((res) => console.log(res) );
  res.send({ pong: true, val: val, foo: 'bar1', mongo: 'mongo', users: 123});
});

module.exports = router;