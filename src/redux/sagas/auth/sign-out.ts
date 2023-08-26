import { delay, put, takeEvery } from "redux-saga/effects";
import { LogService } from "../../../services";
import { hideLoadingAction, showLoadingAction } from "../../actions";
import { AUTH_ACTIONS, appStorage } from "../../../helpers";
import { DispatchAction } from "../../../types";
import { NavigateFunction } from "react-router-dom";
import { menuConfig } from "../../../configs";

function createSignOut(logService: LogService) {
  return function* (action: DispatchAction<{
    navigate: NavigateFunction;
  }>) {
    logService.debug("sign out application");
    yield put(showLoadingAction());
    yield delay(1000);

    appStorage.remove("token");
    appStorage.set({ role: "GUEST" });

    action.payload.navigate(menuConfig.get("HOME").path);
    yield put(hideLoadingAction());
  };
}

export function* startSignOutSaga(logService: LogService) {
  logService.debug("start sign out saga");
  yield takeEvery(
    AUTH_ACTIONS.SIGN_OUT,
    createSignOut(logService)
  );
}
