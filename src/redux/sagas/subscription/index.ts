import { LogService, SubscriptionService } from "../../../services";
import { watchSubscriptionSaga } from "./watch-subscription-state";
import { startFetchAllSubscription } from "./fetch-all-subscription";
import { all } from "redux-saga/effects";

export function* startSubscriptionSagas(
  logService: LogService,
  subscriptionService: SubscriptionService
) {
  logService.debug("start subscription sagas...");
  yield all([
    watchSubscriptionSaga(logService),
    startFetchAllSubscription(logService, subscriptionService),
  ]);
}
