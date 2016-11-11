require('mongodb').MongoClient.connect('mongodb://127.0.0.1:27017/foo', (err, db) => {
  Mongo = db;
  Users = db.collection('users');
  var cp = Users.__proto__; //collectionPrototype

  // cp.add = function(doc) {
  //   doc['created_at'] = new Date
  //   doc['_id'] = niceId();
  //   return this.insert(doc);  
  // }
  cp.add = function(fields) {
    fields['created_at'] = new Date;
    return this.findAndModify(
      {_id: niceID()}, //criteria
      [], //sorting?
      {$set: fields},
      {new: true, upsert: true} //opts: return the new (modified) doc
    );
  }

  cp.updateID = function(_id, fields) {
    return this.findAndModify(
      {_id}, //criteria
      [], //sorting?
      {$set: fields},
      {new: true} //opts: return the new (modified) doc
    );
  }
});