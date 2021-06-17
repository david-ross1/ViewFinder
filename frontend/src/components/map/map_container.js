import {connect} from 'react-redux';
import {fetchViews, createView, fetchView} from '../../actions/view_actions';
import Map from "./map";

const mapStateToProps = (store) => {  
  return {
    geoJSON: store.views.mapDisplay,
    focusId: store.views.focusId, 
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetchViews: () => dispatch(fetchViews()),
  fetchView: (id) => dispatch(fetchView(id)),
  createView: (data) => dispatch(createView(data)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Map);
