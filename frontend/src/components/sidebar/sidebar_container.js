import {connect} from 'react-redux';
import {fetchView} from '../../actions/view_actions';
import Sidebar from './sidebar';

const mapStateToProps = (store) => ({
  focusView: store.views.sidebar,
  focusId: store.views.focusId,
});

const mapDispatchToProps = (dispatch) => ({
  fetchView: (id) => dispatch(fetchView(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);