import * as CommentApiUtil from "../util/comment_api_util";

export const RECEIVE_VIEW_COMMENTS = "RECEIVE_VIEW_COMMENTS";
export const RECEIVE_NEW_COMMENT = "RECEIVE_NEW_COMMENT";

export const receiveViewComments = (comments) => ({
  type: RECEIVE_VIEW_COMMENTS,
  comments,
});

export const receiveNewComment = (comment) => ({
  type: RECEIVE_NEW_COMMENT,
  comment,
});

export const fetchViewComments = (view_id) => (dispatch) => {
  return CommentApiUtil.getViewComments(view_id)
    .then((comments) => dispatch(receiveViewComments(comments)))
    .catch((err) => console.log(err));
};

export const composeComment = (data) => (dispatch) => {
  return CommentApiUtil.writeComment(data)
    .then((comment) => dispatch(receiveNewComment(comment)))
    .catch((err) => console.log(err));
};

export const deleteComment = (data) => (dispatch) => {
  return CommentApiUtil.deleteComment(data)
    .then(() => console.log("Successfully deleted"))
    .catch((err) => console.log(err));
};