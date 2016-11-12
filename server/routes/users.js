app.get('/api/users/all', (req,res) => {
  //res.send({data: [{id: 123, name: 'moo'}]})
  Users.find().toArray().then((users) => res.send({data: users}));
});

app.get('/api/users/', (req,res) => {
  res.redirect('/api/users/all');
})

app.get('/api/users/addOne', (req,res) => {
  Users.add(req.query).then(sendThis(res));
});

app.get('/api/users/deleteAll', (req,res) => {
  Users.deleteMany().then(sendOK(res));
});

app.get('/api/users/updateOne', (req, res) => {
  var qry = req.query;
  Users.updateID(qry._id,qry).then(sendIt(res));
});