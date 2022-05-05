import axios from 'axios';
const token = localStorage.getItem('TOKEN');

export const Axios = axios.create({
  headers: { 'x-access-token': `${token}` }
});