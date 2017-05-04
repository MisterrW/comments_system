var MongoClient = require('mongodb').MongoClient;

var DbConnector = function(){
}

DbConnector.prototype = {
  insert: function(collection_name, data){
    var inserter = this.connect(function(db){
      console.log("name: " + collection_name)
      db.collection(collection_name).insertOne(data);
    });
  },

  connect: function(callback){
    var url = 'mongodb://localhost:27017/comment_system';
    MongoClient.connect(url, function(err, db) {
      if(err){
        db.close();
        return err;
      } else {
        console.log("Connected correctly to database");
        if(callback){callback(db)}
      }
      console.log("closing db")
      db.close();
    });
  }
}

module.exports = DbConnector
