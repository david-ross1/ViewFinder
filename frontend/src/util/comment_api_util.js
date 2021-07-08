import axios from "axios";

export const getViewComments = view_id => {
  return axios.get(`/api/comments/view/${view_id}`);
};

export const writeComment = data => {
  return axios.post("/api/comments/", data);
};

export const deleteComment = data => {
  return axios.delete("/api/comments/", { data });
};
