import axios from 'axios';

export const addPhoto = (photoData) => {
  console.log(photoData);
  const fd = new FormData();
  Object.keys(photoData).forEach(key => fd.append(key,photoData[key]));
  return axios.post('/api/photos/',fd);
};

export const deletePhoto = (photoData) => {
  return axios.delete(`/api/photos/${photoData.id}`,photoData);
}