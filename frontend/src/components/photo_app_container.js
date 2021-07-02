import {connect} from "react-redux";
import {uploadPhoto} from "../actions/photo_actions";
import PhotoApp from "./photoapp2";

const mapStateToProps = ({views,session}) => ({
  viewId: views.focusId,
  loggedIn: session.user !== null,
});

const mapDispatchToProps = (dispatch) => ({
  uploadPhoto: (photoData) => dispatch(uploadPhoto(photoData)),
});

export default connect(mapStateToProps,mapDispatchToProps)(PhotoApp);