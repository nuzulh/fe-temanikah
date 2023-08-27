import { select, takeLatest } from "redux-saga/effects";
import { LogService } from "../../../services";
import { RootState, SubscriptionState } from "../../../types";
import { SUBSCRIPTION_ACTIONS } from "../../../helpers";

function watchSubscriptionState(logService: LogService) {
  return function* () {
    logService.debug("--- subscription state has been updated");

    const subscriptionState: SubscriptionState = yield select(
      (state: RootState) => state.subscriptionState
    );

    logService.table(subscriptionState);
  };
}

export function* watchSubscriptionSaga(logService: LogService) {
  logService.debug("start watch subscription saga");
  yield takeLatest(
    SUBSCRIPTION_ACTIONS.MUTATION.UPDATE_SUBSCRIPTION_STATE,
    watchSubscriptionState(logService)
  );
}
