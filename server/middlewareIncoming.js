var cookieParser       = require('cookie-parser');
var bodyParser         = require('body-parser');
var session            = require('express-session');

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(session({
    secret: 'somesecret',
    resave: true,
    saveUninitialized: true
  }));
}