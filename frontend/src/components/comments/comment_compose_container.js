import { connect } from "react-redux";
import { composeComment } from "../../actions/comment_actions.js";
import CommentCompose from "./comment_compose.js";

const mapStateToProps = state => {
  return {
    currentUser: state.session.user,
    newComment: state.comments.new,
    viewId: state.views.focusId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeComment: data => dispatch(composeComment(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentCompose);
