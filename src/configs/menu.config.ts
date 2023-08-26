import { AvailableMenus, Menu, Menus } from "../types";

const appPath: string = "/app";

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
    path: `${appPath}/`,
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
};

// eslint-disable-next-line
export default {
  get(key: AvailableMenus): Menu {
    return menus[key];
  },
};
