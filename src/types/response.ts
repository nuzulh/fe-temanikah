export interface ApiError {
  errorKey?: string;
  message?: string;
}

export interface ApiResponse<T> extends ApiError {
  error: boolean;
  data?: T;
};
