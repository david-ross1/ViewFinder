import {RECEIVE_VIEWS, RECEIVE_FULL_VIEW_DATA} from "../actions/view_actions";

const ViewsReducer = (state = {
  map: {},
  sidebar: {},
  focusId: null,
}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_VIEWS:
      newState = Object.assign({},state);
      newState.map = action.geoJSON;
      return newState;
    case RECEIVE_FULL_VIEW_DATA:
      newState = Object.assign({},state);
      newState.sidebar = action.view;
      newState.focusId = action.view.id;
      return newState;
    default:
      return state;
  }
}

export default ViewsReducer;