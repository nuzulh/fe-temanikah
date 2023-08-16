import { UserRole } from "./user";

export declare type AvailableMenus =
  "DASHBOARD" | "PROFILE" | "HISTORY";

export declare type Menu = {
  name: string;
  path: string;
  roles: UserRole[];
};

export declare type Menus = {
  [key: string]: Menu;
};
