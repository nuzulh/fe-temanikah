import { AuthService } from "../services/auth";
import { LogService } from "../services/log";
import { SubscriptionService } from "../services/subscription";
import { TransactionService } from "../services/transaction";

export declare type ServicesContext = {
  logService: LogService;
  authService: AuthService;
  subscriptionService: SubscriptionService;
  transactionService: TransactionService;
};
