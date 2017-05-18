var DbConnector = require('./db.js');
var dbConnector = new DbConnector();

var drop = function(collection_name){
  dbConnector.connect(function(db){
    db.collection(collection_name).drop(function(err, result){
      if(!err){
        console.log(collection_name + " dropped");
      }
      db.close();
    });
  });
}

drop('articles');
drop('comments');

var testFind = function(){
  dbConnector.find('articles', {'author': 'Tamsin'}, function(results){
    console.log(results)
  })
}

var add_comment = function(article_title, comment_data){
  console.log("in add_comment");
  console.log(article_title);
  console.log(comment_data);
  dbConnector.find('articles', {"title": article_title}, function(results){
      console.log("hello!")
      var article_id = results[0]._id;
      console.log(article_id);
      comment_data.article_id = article_id;
      console.log(comment_data);
      dbConnector.insert('comments', comment_data, function(){
        dbConnector.find('comments', {}, function(data){
          console.log(data);
        });
      });
  })
}

var seed_articles = function(callback){
  dbConnector.insert('articles', {"author": "Will", "title": "Some fascinating creatures", "body": "Kittens like Koshka"})
  dbConnector.insert('articles', {"author": "May", "title": "Some fascinating creatures 2", "body": "Cats like Mishkin"})
  dbConnector.insert('articles', {"author": "Tamsin", "title": "Some fascinating creatures 3", "body": "Beasts like Mephisto"}, callback)
}

var seed_comments = function(){
  add_comment("Some fascinating creatures 2", {"author": "Flora", "body": "Koshka is more fun"})
}

seed_articles(seed_comments)
//inserting a comment while finding the article id for that comment_system

null
