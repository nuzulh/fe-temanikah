import { all } from "redux-saga/effects";
import { AuthService, LogService, TransactionService } from "../../services";
import { bootInitSaga } from "./boot-init";
import { startAuthSagas } from "./auth";
import { startAppSagas } from "./app";
import { SubscriptionService } from "../../services/subscription";
import { startSubscriptionSagas } from "./subscription";
import { startTransactionSagas } from "./transaction";

export function createRootSagas(
  logService: LogService,
  authService: AuthService,
  subscriptionService: SubscriptionService,
  transactionService: TransactionService
) {
  logService.debug("start TemanikahApp sagas...");
  return function* () {
    yield all([
      bootInitSaga(logService),
      startAppSagas(logService),
      startAuthSagas(logService, authService),
      startSubscriptionSagas(logService, subscriptionService),
      startTransactionSagas(logService, transactionService),
    ]);
  };
}
