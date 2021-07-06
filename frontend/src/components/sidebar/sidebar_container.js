import {connect} from 'react-redux';
import Sidebar from './sidebar';

const mapStateToProps = (state) => {
  return {
  focusView: state.views.sidebar,
  comments: state.views.sidebar.comments,
  isAuthenticated: state.session.isAuthenticated,
  currentUser: state.session.user}
};


export default connect(mapStateToProps)(Sidebar);