import React from "react";

class CommentCompose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      newComment: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({ newComment: nextProps.newComment.text });
  // }

  
  async handleSubmit(e) {
    e.preventDefault();
    let comment = {
      text: this.state.text,
      user: this.props.currentUser,
      viewId: this.props.viewId
    };
    await this.props.composeComment(comment);
    this.setState({ text: "" });
    this.props.trigerFunction(e)
  }

  update() {
    return (e) =>
      this.setState({
        text: e.currentTarget.value,
      });
  }

  render() {
    return (
      <div className="write-comment-container">
        <form onSubmit={this.handleSubmit}>
          <div className="write-comment">
            <textarea
              value={this.state.text}
              onChange={this.update()}
              placeholder="Write your comment..."
              className="write-comment-input"
            ></textarea>
            <input
              className="write-comment-submit"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CommentCompose;
