import {connect} from 'react-redux';
import {createView} from '../../actions/view_actions';
import NewLocationForm from "./new_location_form";

const mapDispatchToProps = (dispatch) => ({
  createView: (viewData) => dispatch(createView(viewData)),
});

export default connect(null,mapDispatchToProps)(NewLocationForm);