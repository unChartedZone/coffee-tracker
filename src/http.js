import axios from 'axios';
const baseURL = process.env.REACT_APP_BASE_API_URL;

const http = axios.create({
  baseURL: baseURL,
});

export default http;
