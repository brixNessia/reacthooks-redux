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

    switch (error.response.status) {
      case 401:
        /**
         * When session is available but the server responds with 401,
         * this means that the token has expired. We will attempt
         * to refresh the token.
         */
        break;
      case 500:
      case 562:
      case 563:
      case 567:
      case 568:
      case 570:
        /**
         * Handle the exceptions when the server
         * responsds with error messages
         */
        break;
      default:
        break;
    }

    return Promise.reject(error);
  },
);

export default Http;
