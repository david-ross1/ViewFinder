import * as ViewApiUtil from "../util/view_api_util";

export const RECEIVE_VIEWS = "RECEIVE_VIEWS";

export const RECEIVE_FULL_VIEW_DATA = "RECEIVE_FULL_VIEW_DATA";

export const receiveGeoJSON = (geoJSON) => ({
  type: RECEIVE_VIEWS,
  geoJSON,
});

export const receiveFullViewData = (view) => ({
  type: RECEIVE_FULL_VIEW_DATA,
  view,
});

export const fetchViews = () => dispatch => ViewApiUtil.getViews().then(views => dispatch(receiveGeoJSON(views.data)));

export const fetchView = id => dispatch => ViewApiUtil.getView(id).then(view => dispatch(receiveFullViewData(view.data)));

export const createView = viewData => dispatch => ViewApiUtil.createView(viewData).then(view => dispatch(receiveFullViewData(view.data)));