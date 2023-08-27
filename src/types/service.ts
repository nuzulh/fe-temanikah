import { AuthService } from "../services/auth";
import { LogService } from "../services/log";
import { SubscriptionService } from "../services/subscription";

export declare type ServicesContext = {
  logService: LogService;
  authService: AuthService;
  subscriptionService: SubscriptionService;
};
