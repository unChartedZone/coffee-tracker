import axios from 'axios';
const baseURL = process.env.REACT_APP_BASE_API_URL;

const client = axios.create({
  baseURL: baseURL,
});

export default client;
