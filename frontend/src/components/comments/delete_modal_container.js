import { connect } from 'react-redux';
import DeleteModal from './delete_modal';
import { deleteComment, fetchViewComments } from '../../actions/comment_actions';


const mapStateToProps = (state) => {
    return {
        viewId: state.views.focusId,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteComment: (data) => dispatch(deleteComment(data)),
        fetchViewComments: (viewId) => dispatch(fetchViewComments(viewId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);
