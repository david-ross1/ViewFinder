import axios from "axios";

export const getViews = () => axios.get("/api/views/");

export const getView = id => axios.get(`/api/views/${id}`);

export const createView = viewData => {
  const fd = new FormData();
  Object.keys(viewData).forEach(key => {
    switch (key) {
      case "photos":
        viewData[key].forEach(photo => fd.append("photos", photo));
        break;
      default:
        fd.append(key, viewData[key]);
    }
  });
  return axios.post("/api/views/", fd);
};
