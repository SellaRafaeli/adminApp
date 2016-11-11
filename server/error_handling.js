module.exports = function(app) {
  app.get('/error', () => {
    a = b //raise error
  });
  
  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    res.status(404).send({msg: 'No such route.'})
  });

  //catches all errors
  app.use(function (err, req, res, next) {
    //console.error(err.stack) //log error
    res.status(500).send({backtrace: err.stack})
  })  
}
