import axios, { AxiosError, AxiosResponse } from 'axios';

const baseURL = process.env.REACT_APP_API_HOSTNAME;

const api = axios.create({
  baseURL,
  timeout: 300000,
});

api.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError) => Promise.reject(error),
);

export { api, baseURL };
