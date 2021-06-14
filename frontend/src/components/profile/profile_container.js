import { connect } from "react-redux";
import { fetchUserComments } from "../../actions/comment_actions";
import Profile from "./profile";

const mapStateToProps = (state) => {
  return {
    comments: Object.values(state.comments.user),
    currentUser: state.session.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserComments: (id) => dispatch(fetchUserComments(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
