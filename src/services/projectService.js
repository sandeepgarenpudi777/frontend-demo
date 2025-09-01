import axios from 'axios';

const API ='http://localhost:8080/api/projects';

export const getAll = () => axios.get(API);

export const getById = (id) => axios.get(`${API}/${id}`);

export const create = (project) => axios.post(API, project);

export const update = (id, project) => axios.put(`${API}/${id}`, project);

export const remove = (id) => axios.delete(`${API}/${id}`);
