import { RECEIVE_NEW_COMMENT } from "../actions/comment_actions";

const CommentsReducer = (state = { user: {}, new: undefined }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_NEW_COMMENT:
      newState.new = action.comment.data;
      return newState;
    default:
      return state;
  }
};

export default CommentsReducer;
