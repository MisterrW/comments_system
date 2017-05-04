var React = require('react');
var ReactDOM = require('react-dom');
var Comment = require('./comment.jsx')

class CommentBox {
  update(comment_object){
    var comments_to_render = [];
    comment_object.comments.forEach(function(comment, index) {
      comments_to_render.push(<Comment key={index} comment={comment}> </Comment>);
    })
    ReactDOM.render(
      <div>
        { comments_to_render }
      </div>,
      document.querySelector('#react-box')
    )
  }
}

module.exports = CommentBox;
