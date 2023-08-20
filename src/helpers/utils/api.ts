import axios, { AxiosRequestConfig } from "axios";
import { appConfig } from "../consts";

axios.defaults.baseURL = appConfig.SERVICE_URL;

// eslint-disable-next-line
export default {
  async get<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return axios
      .get(url, config)
      .then((result) => result.data)
      .catch((error) => error.response.data);
  },
  async post<T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return axios
      .post(url, data, config)
      .then((result) => result.data)
      .catch((error) => error.response.data);
  },
  async put<T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return axios
      .put(url, data, config)
      .then((result) => result.data)
      .catch((error) => error.response.data);
  },
  async delete<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return axios
      .delete(url, config)
      .then((result) => result.data)
      .catch((error) => error.response.data);
  },
};
