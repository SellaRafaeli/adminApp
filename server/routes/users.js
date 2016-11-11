app.get('/users', (req,res) => {
  Users.find().toArray().then(sendThis(res));
})

app.get('/users/add', (req,res) => {
  MongoAdd(Users,req.query).then(sendThis(res));
})

// app.get('/users/update', (req,res) => {
//   MongoAdd(Users,req.query).then(sendThis(res));
// })