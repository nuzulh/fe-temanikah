import axios, { AxiosRequestConfig } from "axios";

axios.defaults.baseURL = "http://localhost:5000";

export default {
  get(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<any> {
    return axios.get(url, config);
  },
  post(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<any> {
    return axios.post(url, data, config);
  },
  put(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<any> {
    return axios.put(url, data, config);
  },
  delete(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<any> {
    return axios.delete(url, config);
  },
};
