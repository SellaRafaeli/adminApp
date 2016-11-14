var express            = require('express');
app                    = express();

var path               = require('path');
var routes             = require('./routes/index');
var users              = require('./routes/users');
var posts              = require('./routes/posts');
var mongo              = require('./mongoDB')
var middlewareIncoming = require('./middlewareIncoming')(app)
var nodeUtils          = require('./nodeUtils')

app.use(express.static(path.join(__dirname, '../'))); //serve static files from ../
app.use('/', routes);

var error_handling = require('./error_handling.js')(app); //must be at end of file.

module.exports = app;