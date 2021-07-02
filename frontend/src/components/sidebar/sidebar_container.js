import {connect} from 'react-redux';
import Sidebar from './sidebar';

const mapStateToProps = (state) => {
  return {
  focusView: state.views.sidebar,
  isAuthenticated: state.session.isAuthenticated}
};


export default connect(mapStateToProps)(Sidebar);