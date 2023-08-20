import { delay, put, takeLeading } from "redux-saga/effects";
import { LogService } from "../../services";
import { APP_ACTIONS, appStorage } from "../../helpers";
import { hideLoadingAction, showLoadingAction } from "../actions";

function createBootInit(logService: LogService) {
  return function* () {
    logService.debug("initialize boot");
    yield put(showLoadingAction());
    yield delay(1000);

    if (!appStorage.get()) appStorage.set({
      language: "ID",
      colorMode: "LIGHT",
      role: "GUEST",
    });

    yield put(hideLoadingAction());
  };
}

export function* bootInitSaga(logService: LogService) {
  logService.debug("start boot init saga");
  yield takeLeading(
    APP_ACTIONS.START_BOOT_INIT,
    createBootInit(logService),
  );
}
