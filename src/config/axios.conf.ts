import axios,{ AxiosInstance } from "axios";

export const instance: AxiosInstance = axios.create({
    baseURL: 'https://randomuser.me',
    timeout: 1000,
  });

