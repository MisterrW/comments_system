var pool = require('./db_connector');

var articleSetup = function(callback){
  pool.query('INSERT INTO articles (author, title, body) VALUES ($1, $2, $3) RETURNING *;', ['Will', 'Another testing article', 'This is probably going to work. It\'s a near certainty.'], callback);
}

var commentSetup = function(){
  addComment = function(result){
    var id = result['rows'][0].id;
    pool.query('INSERT INTO comments (article_id, author, title, body) VALUES ($1, $2, $3, $4) RETURNING *;', [id, 'Will', 'Another testing comment', 'First time, my art id should be about 15.'])
  }
  pool.query("SELECT * FROM articles WHERE title = 'Another testing article'", function(err, result){
    if(err){
      console.log('error! : ' + err);
    } else {
      console.log(result);
      addComment(result);
    }
  });
}

articleSetup(function(err, result){
  commentSetup();
});
