import axios from 'axios';

const Http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: 'application/json',
});

Http.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (typeof error.response === 'undefined') {
      return alert('A network error occurred.');
    }

    if (error.response.status) {
      console.log('ERROR', error.response.status);
    }

    return Promise.reject(error);
  },
);

export default Http;
