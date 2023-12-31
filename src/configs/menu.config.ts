import { AvailableMenus, Menu, Menus } from "../types";

const appPath: string = "/app";
const authPath: string = "/auth";

const menus: Menus = {
  // Unsecured
  HOME: {
    name: "Home",
    path: "/",
    roles: ["ADMIN", "GUEST", "USER"],
  },
  THEMES: {
    name: "Themes",
    path: "/themes",
    roles: ["ADMIN", "GUEST", "USER"],
  },
  PACKAGES: {
    name: "Packages",
    path: "/packages",
    roles: ["ADMIN", "GUEST", "USER"],
  },
  CONTACT: {
    name: "Contact",
    path: "/contact",
    roles: ["ADMIN", "GUEST", "USER"],
  },
  // AUTH
  SIGNIN: {
    name: "Sign In",
    path: `${authPath}/signin`,
    roles: ["GUEST"],
  },
  SIGNUP: {
    name: "Sign Up",
    path: `${authPath}/signup`,
    roles: ["GUEST"],
  },
  // Secured
  DASHBOARD: {
    name: "Dashboard",
    path: appPath,
    roles: ["USER"],
  },
  SUBSCRIPTIONS: {
    name: "Subscriptions",
    path: `${appPath}/subscriptions`,
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
  // ERROR
  FORBIDDEN: {
    name: "Forbidden access",
    path: "/forbidden",
    roles: ["USER", "ADMIN", "GUEST"],
  },
  UNKNOWN: {
    name: "Page not found",
    path: "/not-found",
    roles: ["USER", "ADMIN", "GUEST"],
  },
};

// eslint-disable-next-line
export default {
  get(key: AvailableMenus): Menu {
    return menus[key];
  },
  getByPath(key: string): Menu {
    return Object.values(menus).find(
      (x) => x.path === key
    ) as Menu;
  }
};
