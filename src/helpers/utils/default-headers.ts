import { AxiosHeaders } from "axios";

export function applyDefaultHeaders(
  headers?: any,
  token?: string
): AxiosHeaders {
  const defaultHeaders = {
    "Content-Type": "application/json",
    "Accept": "*/*",
    ...headers,
  };
  return token ? {
    ...defaultHeaders,
    Authorization: token,
  } : { ...defaultHeaders };
}
