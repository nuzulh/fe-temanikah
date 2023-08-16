import { AvailableMenus, Menu, Menus } from "../types";

const menus: Menus = {
  DASHBOARD: {
    name: "Dashboard",
    path: "/dashboard",
    roles: ["CUSTOMER"],
  },
  PROFILE: {
    name: "Profile",
    path: "/profile",
    roles: ["CUSTOMER"],
  },
  HISTORY: {
    name: "History",
    path: "/history",
    roles: ["CUSTOMER"],
  },
};

export default {
  get(key: AvailableMenus): Menu {
    return menus[key];
  },
};
