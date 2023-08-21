import { NavigateFunction } from "react-router-dom";
import { AvailableMenus } from "./menu";

export declare type PageRoute = {
  navigate: NavigateFunction;
  name: AvailableMenus;
  params?: any;
};
