import { connect } from "react-redux";
import { fetchViews, fetchView } from "../../actions/view_actions";
import Map from "./map";

const mapStateToProps = state => ({
  geoJSON: state.views.mapDisplay,
  focusId: state.views.focusId,
  loggedIn: !!state.session.user,
});

const mapDispatchToProps = dispatch => ({
  fetchViews: () => dispatch(fetchViews()),
  fetchView: id => dispatch(fetchView(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
