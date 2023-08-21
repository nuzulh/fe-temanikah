import { select, takeLatest } from "redux-saga/effects";
import { LogService } from "../../../services";
import { APP_ACTIONS } from "../../../helpers";
import { AppState, RootState } from "../../../types";

function createWatchAppState(logService: LogService) {
  return function* () {
    logService.debug("app state has been updated");

    const appState: AppState = yield select(
      (state: RootState) => state.appState
    );

    logService.json(appState);
  };
}

export function* watchAppStateSaga(logService: LogService) {
  logService.debug("start watch app state saga");
  yield takeLatest(
    APP_ACTIONS.MUTATION.UPDATE_APP_STATE,
    createWatchAppState(logService),
  );
}
