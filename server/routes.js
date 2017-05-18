var express = require('express');
var routes = express.Router();
var ArticleController = require('./controllers/articles');
var CommentController = require('./controllers/comments');

routes.get('/', function(req, res){
  console.log('connected!');
  res.json({'working': 'true'})
});

routes.use('/articles', ArticleController);
module.exports = routes;

routes.use('/comments', CommentController);
module.exports = routes;
