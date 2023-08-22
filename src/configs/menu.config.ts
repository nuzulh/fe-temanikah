import { AvailableMenus, Menu, Menus } from "../types";

const appPath: string = "/app";

const menus: Menus = {
  // Unsecured
  HOME: {
    name: "Home",
    path: "/",
    roles: ["GUEST", "USER"],
  },
  SIGNIN: {
    name: "Sign In",
    path: "/signin",
    roles: ["GUEST"],
  },
  SIGNUP: {
    name: "Sign Up",
    path: "/signup",
    roles: ["GUEST"],
  },
  // Secured
  DASHBOARD: {
    name: "Dashboard",
    path: `${appPath}/dashboard`,
    roles: ["USER"],
  },
  PROFILE: {
    name: "Profile",
    path: `${appPath}/profile`,
    roles: ["USER"],
  },
  HISTORY: {
    name: "History",
    path: `${appPath}/history`,
    roles: ["USER"],
  },
};

// eslint-disable-next-line
export default {
  get(key: AvailableMenus): Menu {
    return menus[key];
  },
};
