import axios from 'axios';
import AuthService from '../services/AuthService';

const request = axios.create({
  baseURL: '/'
})

request.defaults.headers.common['Authorization'] = AuthService.getAuthHeader;

export default request;
