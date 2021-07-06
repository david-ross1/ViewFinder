import { connect } from "react-redux";
import CommentsShow from './comments_show';
import { fetchViewComments, deleteComment } from "../../actions/comment_actions";


const mapStateToProps = (state) => {
    return {
        viewId: state.views.focusId,
        comments: state.views.sidebar.comments,
        currentUser: state.session.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchViewComments: (viewId) => (dispatch(fetchViewComments(viewId))),
        deleteComment: (data) => (dispatch(deleteComment(data)))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(CommentsShow);

