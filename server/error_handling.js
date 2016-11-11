module.exports = function(app) {
  app.get('/error', () => {
    a = b //raise error
  });
  
  // 404 
  app.use(function (req, res, next) {
    res.status(404).send({msg: 'No such route.'})
  });

  // 500 - catches all errors
  app.use(function (err, req, res, next) {
    //console.error(err.stack) //log error
    res.status(500).send({backtrace: err.stack})
  })  
}
