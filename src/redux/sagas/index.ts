import { all } from "redux-saga/effects";
import { AuthService, LogService } from "../../services";
import { bootInitSaga } from "./boot-init";
import { startAuthSagas } from "./auth";
import { startAppSagas } from "./app";
import { SubscriptionService } from "../../services/subscription";
import { startSubscriptionSagas } from "./subscription";

export function createRootSagas(
  logService: LogService,
  authService: AuthService,
  subscriptionService: SubscriptionService
) {
  logService.debug("start TemanikahApp sagas...");
  return function* () {
    yield all([
      bootInitSaga(logService),
      startAppSagas(logService),
      startAuthSagas(logService, authService),
      startSubscriptionSagas(logService, subscriptionService),
    ]);
  };
}
