'use strict';
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendfile('./index.html');
});
router.get('/ping', function (req, res, next) {
  console.log('hi');
    res.send({ pong: true, val: 'my val', foo: 'bar'});
});

module.exports = router;