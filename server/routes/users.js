//1. Create
app.get('/api/users/addOne', (req,res) => {
  Users.add(req.query).then(sendThis(res));
});

//2. Read
app.get('/api/users/all', (req,res) => {
  //res.send({data: [{id: 123, name: 'moo'}]})
  Users.find().toArray().then((users) => res.send({data: users}));
});

app.get('/api/users/', (req,res) => {
  res.redirect('/api/users/all');
})

app.get('/api/users/id/:_id', (req,res) => {
  Users.findOne({_id: req.params._id}).then(sendThis(res));
})

app.get('/api/users/search', (req,res) => {
  Users.find({name: new RegExp(req.query.name, 'i')}).toArray().then(sendThis(res));
});

//3. Update
app.get('/api/users/updateOne', (req, res) => {
  var qry = req.query;
  Users.updateID(qry._id,qry).then(sendIt(res));
});

//4. Delete
app.get('/api/users/deleteAll', (req,res) => {
  Users.deleteMany().then(sendOK(res));
});

app.get('/api/users/delete/:_id', (req,res) => {
  log(req.params._id)
  Users.deleteOne({_id: req.params._id}).then(sendOK(res));
});
