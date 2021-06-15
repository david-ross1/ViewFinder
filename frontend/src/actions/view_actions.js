import * as ViewApiUtil from "../util/view_api_util";

export const RECEIVE_VIEWS = "RECEIVE_VIEWS";

export const RECEIVE_FULL_VIEW_DATA = "RECEIVE_VIEW_DATA";

export const recieveViews = (views) => ({
  type: RECEIVE_VIEWS,
  views,
});

export const receiveFullViewData = (view) => ({
  type: RECEIVE_FULL_VIEW_DATA,
  view,
});

export const fetchViews = () => dispatch => ViewApiUtil.getViews().then(views => dispatch(receiveViews(views)));

export const fetchView = id => dispatch => ViewApiUtil.getView(id).then(view => dispatch(receiveFullViewData(view)));

export const createView = viewData => dispatch => ViewApiUtil.createView(viewData).then(view => dispatch(receiveFullViewData(view)));