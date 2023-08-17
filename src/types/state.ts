import { AvailableMenus, User } from "./";

export declare type AppState = {
  selectedMenu: AvailableMenus;
  colorMode: "LIGHT" | "DARK";
  language: "ID" | "EN";
  isLoading: boolean;
};

export declare type AuthState = {
  user: User | null;
  isError: boolean;
  error: Error | null;
};

export declare type RootState = {
  appState: AppState;
  authState: AuthState;
};

export declare type SelectStateFn = <T>(cb: (state: RootState) => T) => T;
