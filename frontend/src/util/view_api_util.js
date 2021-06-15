import axios from 'axios';

export const getViews = () => axios.get('/api/views/');

export const getView = (id) => axios.get(`/api/views/${id}`);

export const createView = (viewData) => axios.post('/api/views',viewData);