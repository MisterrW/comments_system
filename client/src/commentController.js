var CommentBox = require('./react/commentBox.jsx')

var CommentController = function(){
  this.commentBox = new CommentBox();
  this.sampleComments = {
    comments: [
      {
        body: "Interesting",
        userName: "Bob"
      },
      {
        body: "Not very interesting",
        userName: "Jeff"
      }
    ]
  };

  this.commentBox.update(this.sampleComments);
}

CommentController.prototype = {
}

module.exports = CommentController;
