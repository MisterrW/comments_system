var express = require('express');
var DbConnector = require('../db/db.js');
var dbConnector = new DbConnector();
var articleRoutes = express.Router();
var ObjectId = require('mongodb').ObjectID;

articleRoutes.get('/', function(req, res){
  dbConnector.find('articles', {}, function(article_data){
    res.json(article_data);
  })
})

articleRoutes.get('/:id', function(req, res){
  var id = req.params.id;
  dbConnector.find('articles', {'_id': ObjectId(id)}, function(article_data){
    res.json(article_data);
  })
})

articleRoutes.get('/:id/comments', function(req, res){
  var id = req.params.id;
  dbConnector.find('comments', {'article_id': ObjectId(id)}, function(comment_data){
    res.json(comment_data);
  })
})

module.exports = articleRoutes;
