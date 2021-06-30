import axios from 'axios';

export const addPhoto = (photoData) => {
  const fd = new FormData();
  Object.keys(photoData).forEach(key => fd.append(key,viewData[key]));
  return axios.post('/api/views/',fd);
};

export const deletePhoto = (photoData) => {
  return axios.delete(`/api/photos/${photoData.id}`,photoData);
}