app.get('/users/all', (req,res) => {
  Users.find().toArray().then(sendThis(res));
});

app.get('/users/addOne', (req,res) => {
  Users.add(req.query).then((doc) => res.send(doc.value));
});

app.get('/users/deleteAll', (req,res) => {
  Users.deleteMany().then(sendOK(res));
});

app.get('/users/updateOne', (req, res) => {
  var qry = req.query;
  Users.updateID(qry._id,qry).then((doc) => res.send(doc.value));
});