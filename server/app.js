var express         = require('express');
var path            = require('path');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser');
var session         = require('express-session');
var routes          = require('./routes/index');
var app             = express();

require('mongodb').MongoClient.connect('mongodb://127.0.0.1:27017/foo', (err, db) => {
  Mongo = db;
  Users = db.collection('users');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'somesecret',
    resave: true,
    saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, '../'))); //serve static files from ../
app.use('/', routes);

var error_handling = require('./error_handling.js')(app); //must be at end of file.

module.exports = app;