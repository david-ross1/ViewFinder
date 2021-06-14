import React from "react";
import "./comment.css";

class CommentBox extends React.Component {
  render() {
    return (
      <div className="comment-text">
        <h3>{this.props.text}</h3>
      </div>
    );
  }
}

export default CommentBox;
