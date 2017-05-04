var Test = require('./react/test.jsx')
var CommentController = require('./commentController.js')

var app = function() {
  console.log("JS working");
  var commentController = new CommentController();
}

window.onload = app();
