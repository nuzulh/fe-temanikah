import { takeLatest } from "redux-saga/effects";
import { LogService } from "../../../services";
import { APP_ACTIONS } from "../../../helpers";

function createWatchAppState(logService: LogService) {
  return function* () {
    logService.debug("app state has been updated");

    yield null;
  };
}

export function* watchAppStateSaga(logService: LogService) {
  logService.debug("start watch app state saga");
  yield takeLatest(
    APP_ACTIONS.MUTATION.UPDATE_APP_STATE,
    createWatchAppState(logService),
  );
}
