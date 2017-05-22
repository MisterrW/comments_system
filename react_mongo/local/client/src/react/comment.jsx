var React = require('react');
var ReactDOM = require('react-dom');

class Comment extends React.Component {
  constructor(props){
    console.log(props)
    super(props)
  }
  render(){
    console.log(this.props)
    var commentText = this.props.comment.body
    var commentAuthor = this.props.comment.userName
    console.log(commentAuthor)
    return <div>
      <h3> { commentAuthor } </h3>
      <p> { commentText } </p>
      <button class="reply-button">Reply</button>
    </div>
  }
}

module.exports = Comment
