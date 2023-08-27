import { call, put, takeEvery } from "redux-saga/effects";
import { LogService, SubscriptionService } from "../../../services";
import { ApiResponse, Subscriptions } from "../../../types";
import { showPopupAction, updateSubscriptionState } from "../../actions";
import { SUBSCRIPTION_ACTIONS } from "../../../helpers";

function createFetchAllSubscription(
  logService: LogService,
  subscriptionService: SubscriptionService
) {
  return function* () {
    logService.debug("fetching all subscription");

    const result: ApiResponse<Subscriptions> = yield call(
      subscriptionService.getAll
    );

    if (result.error) {
      yield put(showPopupAction(
        "ERROR",
        result.errorKey!,
        result.message!
      ));
      return;
    }

    yield put(updateSubscriptionState({
      subscriptions: result.data!,
      selectedSubscription: result.data![0] || null,
    }));
  };
}

export function* startFetchAllSubscription(
  logService: LogService,
  subscriptionService: SubscriptionService
) {
  logService.debug("start fetch all subscription saga");
  yield takeEvery(
    SUBSCRIPTION_ACTIONS.FETCH_ALL,
    createFetchAllSubscription(logService, subscriptionService)
  );
}
