import axios from 'axios';
import appConfig from '../../appConfig';

export const API = axios.create({
  baseURL: appConfig.backend.baseURL,
});

//default header for the axios instance
export const setAuthHeader = (token) => {
  API.defaults.headers.common['authorization'] = `${token}`;
};
export const postAuth = (userData) => API.post(`users/login`, userData);
export const userSignup = (userData) => API.post(`users/signup`, userData);

export const getPortfolioByUserId = (id) => API.get(`/portfolios/${id}`);
