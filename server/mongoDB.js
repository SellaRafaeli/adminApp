require('mongodb').MongoClient.connect('mongodb://127.0.0.1:27017/foo', (err, db) => {
  Mongo = db;
  Users = db.collection('users');
  var collectionPrototype = Users.__proto__;

  collectionPrototype.add = function(doc) {
    doc['created_at'] = new Date
    doc['_id'] = niceId();
    return this.insert(doc);  
  }

});