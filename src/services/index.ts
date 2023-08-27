import { createContext } from "react";
import { SelectStateFn, ServicesContext } from "../types";
import { createLogService } from "./log";
import { createAuthService } from "./auth";
import { createSubscriptionService } from "./subscription";
import { createTransactionService } from "./transaction";

export const Services = createContext<ServicesContext>({} as ServicesContext);

export function createServices(
  select: SelectStateFn
): ServicesContext {
  const logService = createLogService();
  const authService = createAuthService(select);
  const subscriptionService = createSubscriptionService(select);
  const transactionService = createTransactionService(select);

  return {
    logService,
    authService,
    subscriptionService,
    transactionService,
  };
}

export * from "./log";
export * from "./auth";
export * from "./subscription";
export * from "./transaction";
