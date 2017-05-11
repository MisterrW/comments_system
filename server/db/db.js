var MongoClient = require('mongodb').MongoClient;

var DbConnector = function(){
}

DbConnector.prototype = {
  insert: function(collection_name, data, callback){
    console.log("insert callback: " + callback)
    this.connect(function(db){
      // console.log("name: " + collection_name)
      db.collection(collection_name).insertOne(data, function(err, result){
        if(!err){
          // console.log("data inserted");
          if(callback){
            callback()
          }
        }
        db.close();
      });
    });
  },

  find: function(collection_name, query, callback){
    this.connect(function(db){
      db.collection(collection_name).find(query).toArray(function(err, result){
        if(!err){
          console.log("query complete");
          callback(result);
        }
        db.close();
      });
    });
  },

  connect: function(callback){
    var url = 'mongodb://localhost:27017/comment_system';
    MongoClient.connect(url, function(err, db) {
      if(err){
        console.log(err)();
        return err;
      } else {
        if(callback){
          callback(db)
        } else {
          console.log("Connected correctly to database, now closing");
          db.close();
        }
      }
    });
  },
}

module.exports = DbConnector
