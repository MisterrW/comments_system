var express = require('express');
var routes = express.Router();
var ArticleController = require('./controllers/articles');

var articleController = new ArticleController();

routes.get('/', function(req, res){
  console.log('connected!');
})

routes.get('/article', function(req, res){
  console.log('connected!');
})

routes.use('/article', articleController);
module.exports = routes;
