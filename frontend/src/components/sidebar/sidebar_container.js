import {connect} from 'react-redux';
import { fetchView } from '../../actions/view_actions';
import Sidebar from './sidebar';

const mapStateToProps = (state) => {
  return {
  focusView: state.views.sidebar,
  comments: state.views.sidebar.comments,
  isAuthenticated: state.session.isAuthenticated,
  currentUser: state.session.user}
};
const mapDispatchToProps = dispatch => {
  return {
    fetchView: (viewId) => dispatch(fetchView(viewId))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);