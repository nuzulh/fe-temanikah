import { AxiosHeaders } from "axios";

export function applyDefaultHeaders(
  token?: string | null,
  headers?: any
): AxiosHeaders {
  const defaultHeaders = {
    "Content-Type": "application/json",
    "Accept": "*/*",
    ...headers,
  };
  return token ? {
    ...defaultHeaders,
    Authorization: `Bearer ${token}`,
  } : { ...defaultHeaders };
}
