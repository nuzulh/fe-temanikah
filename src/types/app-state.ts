import { AvailableMenus, User } from "./";

export declare type AppState = {
  selectedMenu: AvailableMenus;
  user: User;
  colorMode: "LIGHT" | "DARK";
  isLoading: boolean;
  language: "ID" | "EN";
};
