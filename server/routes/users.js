app.get('/users/all', (req,res) => {
  Users.find().toArray().then(sendThis(res));
})

app.get('/users/addOne', (req,res) => {
  Users.add(req.query).then(sendOK(res));
})

app.get('/users/deleteAll', (req,res) => {
  Users.deleteMany().then(sendOK(res));
})

app.get('/users/updateOne', (req, res) => {
  var _id = req.query._id;
  Users.updateOne({_id},{$set: req.query}).then(sendOK(res));
})

