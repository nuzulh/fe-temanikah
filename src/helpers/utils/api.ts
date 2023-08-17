import axios, { AxiosRequestConfig } from "axios";

axios.defaults.baseURL = "http://localhost:5000";

export class API {
  static get(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<any> {
    return axios.get(url, config);
  };
  static post(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<any> {
    return axios.post(url, data, config);
  };
  static put(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<any> {
    return axios.put(url, data, config);
  };
  static delete(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<any> {
    return axios.delete(url, config);
  };
};
