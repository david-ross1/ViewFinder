import React from "react";
import CommentBox from "../comments/comment_box";
import "./profile.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }

  componentWillMount() {
    console.log(this.props.currentUser.id);
    this.props.fetchUserComments(this.props.currentUser.id);
  }

  componentWillReceiveProps(newState) {
    this.setState({ comments: newState.comments });
  }

  render() {
    if (this.state.comments.length === 0) {
      return <div>This user has no Comments</div>;
    } else {
      return (
        <div className="all-user-comments">
          <h2>All of This User's Comments</h2>
          {this.state.comments.map((comment) => (
            <CommentBox key={comment._id} text={comment.text} />
          ))}
        </div>
      );
    }
  }
}

export default Profile;
