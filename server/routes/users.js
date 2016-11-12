app.get('/users/all', (req,res) => {
  Users.find().toArray().then(sendThis(res));
});

app.get('/users/', (req,res) => {
  res.redirect('/users/all');
})

app.get('/users/addOne', (req,res) => {
  Users.add(req.query).then(sendThis(res));
});

app.get('/users/deleteAll', (req,res) => {
  Users.deleteMany().then(sendOK(res));
});

app.get('/users/updateOne', (req, res) => {
  var qry = req.query;
  Users.updateID(qry._id,qry).then(sendIt(res));
});