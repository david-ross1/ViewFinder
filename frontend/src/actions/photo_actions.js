import {fetchView} from "./view_actions";
import * as PhotoApiUtil from "../util/photo_api_util";

export const uploadPhoto = photoData => dispatch => 
  PhotoApiUtil.addPhoto(photoData).then(res => {
    const { viewId } = res.data;
    dispatch(fetchView(viewId));
  });

export const deletePhoto = photoData => dispatch =>
  PhotoApiUtil.deletePhoto(photoData).then(res => {
    const { viewId } = res.data;
    dispatch(fetchView(viewId));
  });