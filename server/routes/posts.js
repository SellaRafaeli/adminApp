//2. Read
app.get('/api/posts/all', (req,res) => {
  res.send({posts: [{_id: 123, name: 'post1'},{_id:456, name: 'post2'}]});
  //Posts.find().toArray().then((users) => res.send({data: users}));
});
