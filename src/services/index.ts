
import { createContext } from "react";
import { SelectStateFn, ServicesContext } from "../types";
import { createLogService } from "./log";
import { createAuthService } from "./auth";
import { createSubscriptionService } from "./subscription";

export const Services = createContext<ServicesContext>({} as ServicesContext);

export function createServices(
  select: SelectStateFn
): ServicesContext {
  const logService = createLogService();
  const authService = createAuthService(select);
  const subscriptionService = createSubscriptionService(select);

  return {
    logService,
    authService,
    subscriptionService,
  };
}

export * from "./log";
export * from "./auth";
export * from "./subscription";
