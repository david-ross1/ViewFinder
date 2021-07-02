import {RECEIVE_VIEWS, RECEIVE_FULL_VIEW_DATA} from "../actions/view_actions";
import { RECEIVE_NEW_COMMENT } from "../actions/comment_actions";

const ViewsReducer = (state = {
  mapDisplay: {},
  sidebar: {},
  focusId: null,
}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_VIEWS:
      newState = Object.assign({},state);
      newState.mapDisplay = action.geoJSON;
      return newState;
    case RECEIVE_FULL_VIEW_DATA:
      newState = Object.assign({},state);
      newState.sidebar = action.view;
      newState.focusId = action.view._id;
      return newState;
    case RECEIVE_NEW_COMMENT:
      newState = Object.assign({},state);
      newState.sidebar.comments.push(action.comment.data);
      return newState;
    default:
      return state;
  }
}

export default ViewsReducer;