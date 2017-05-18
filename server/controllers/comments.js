
var express = require('express');
var DbConnector = require('../db/db.js');
var dbConnector = new DbConnector();
var commentRoutes = express.Router();
var ObjectId = require('mongodb').ObjectID;

commentRoutes.get('/:id', function(req, res){
  var id = req.params.id;
  dbConnector.find('comments', {'_id': ObjectId(id)}, function(comment_data){
    res.json(comment_data);
  })
})

commentRoutes.get('/', function(req, res){
  dbConnector.find('comments', {}, function(comment_data){
    res.json(comment_data);
  })
})

module.exports = commentRoutes;
