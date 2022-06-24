import axios from 'axios';

export const BASE_URL = 'http://54.180.93.212:8080';
// process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'http://54.180.93.212:8080';

export const getComments = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/guestbook?id=${id}`);
  const data = response.data;

  return data;
};

export const addComment = ({ id, name, message }) => {
  return axios.post(`${BASE_URL}/guestbook?id=${id}`, { name, message });
};
