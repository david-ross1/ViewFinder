import {connect} from 'react-redux';
import {fetchViews, fetchView} from '../../actions/view_actions';
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
});

export default connect(mapStateToProps,mapDispatchToProps)(Map);
