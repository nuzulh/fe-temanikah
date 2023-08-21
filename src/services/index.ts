
import { createContext } from "react";
import { SelectStateFn, ServicesContext } from "../types";
import { createLogService } from "./log";
import { createAuthService } from "./auth";

export const Services = createContext<ServicesContext>({} as ServicesContext);

export function createServices(
  select: SelectStateFn
): ServicesContext {
  const logService = createLogService();
  const authService = createAuthService(select);

  return {
    logService,
    authService,
  };
}

export * from "./log";
export * from "./auth";
