import axios from 'axios';

export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_LOCAL_BASE_URL
    : process.env.REACT_APP_PRODUCT_BASE_URL;

export const getComments = async (id: string) => {
  console.log('BASE_URL', BASE_URL);
  const response = await axios.get(`${BASE_URL}/guestbook?id=${id}`);
  const data = response.data;

  return data;
};
