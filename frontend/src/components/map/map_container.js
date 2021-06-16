import {connect} from 'react-redux';
import {fetchViews, createView} from '../../actions/view_actions';
import Map from "./map";

const mapStateToProps = (store) => ({
  geoJSON: store.views.map,
  focusId: store.views.focusId, 
});

const mapDispatchToProps = (dispatch) => ({
  fetchViews: () => dispatch(fetchViews()),
  createView: (data) => dispatch(createView(data)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Map);
