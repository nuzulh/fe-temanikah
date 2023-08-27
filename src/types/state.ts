import { SubscriptionState, User } from "./";

export declare type AppState = {
  darkMode: boolean;
  language: "ID" | "EN";
  isLoading: boolean;
  // isError: boolean;
  // errorMessage: string | null;
  // apiError: ApiError | null;
};

export declare type AuthState = {
  user: User | Partial<User> | null;
  // isError: boolean;
  // error: Error | null;
};

export declare type RootState = {
  appState: AppState;
  authState: AuthState;
  subscriptionState: SubscriptionState;
};

export declare type SelectStateFn = <T>(cb: (state: RootState) => T) => T;

export declare type DispatchAction<T extends unknown> = {
  type: string;
  payload: T;
};

export declare type PopupType = "SUCCESS" | "INFO" | "WARNING" | "ERROR";

export declare type Popup = {
  type: PopupType;
  title: string;
  message: string;
  duration?: number;
};
