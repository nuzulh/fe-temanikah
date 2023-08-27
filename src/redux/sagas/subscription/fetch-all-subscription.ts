import { call, put, takeEvery } from "redux-saga/effects";
import { LogService, SubscriptionService } from "../../../services";
import { ApiResponse, Subscriptions } from "../../../types";
import { hideLoadingAction, showLoadingAction, showPopupAction, updateSubscriptionAction } from "../../actions";
import { SUBSCRIPTION_ACTIONS } from "../../../helpers";

function createFetchAllSubscription(
  logService: LogService,
  subscriptionService: SubscriptionService
) {
  return function* () {
    logService.debug("fetching all subscription");
    yield put(showLoadingAction());

    try {
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

      yield put(updateSubscriptionAction({
        subscriptions: result.data!,
        selectedSubscription: result.data![0] || null,
      }));

    } catch (error) {
      logService.error(error);

    } finally {
      yield put(hideLoadingAction());
    }
  };
}

export function* startFetchAllSubscription(
  logService: LogService,
  subscriptionService: SubscriptionService
) {
  logService.debug("start fetch all subscription saga");
  yield takeEvery(
    SUBSCRIPTION_ACTIONS.FETCH_ALL_SUBSCRIPTION,
    createFetchAllSubscription(logService, subscriptionService)
  );
}
