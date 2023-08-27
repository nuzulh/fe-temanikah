import { UserRole } from "./user";

export declare type AvailableMenus =
  // Unsecured
  "HOME" |
  "THEMES" |
  "PACKAGES" |
  "CONTACT" |
  "SIGNIN" |
  "SIGNUP" |
  // Secured
  "DASHBOARD" |
  "SUBSCRIPTIONS" |
  "PROFILE" |
  "HISTORY" |
  // Common
  "UNKNOWN" |
  "FORBIDDEN" |
  "BACK";

export declare type Menu = {
  name: string;
  path: string;
  roles: UserRole[];
};

export declare type Menus = {
  [key: string]: Menu;
};
