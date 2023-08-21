import { UserRole } from "./user";

export declare type AvailableMenus =
  "HOME" |
  "SIGNIN" |
  "SIGNUP" |
  "DASHBOARD" |
  "PROFILE" |
  "HISTORY" |
  "UNKNOWN" |
  "BACK";

export declare type Menu = {
  name: string;
  path: string;
  roles: UserRole[];
};

export declare type Menus = {
  [key: string]: Menu;
};
