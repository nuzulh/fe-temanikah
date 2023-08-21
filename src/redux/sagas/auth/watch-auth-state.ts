import { select, takeLatest } from "redux-saga/effects";
import { LogService } from "../../../services";
import { AUTH_ACTIONS } from "../../../helpers";
import { AuthState, RootState } from "../../../types";

function createWatchAuthState(logService: LogService) {
  return function* () {
    logService.debug("auth state has been updated");

    const authState: AuthState = yield select(
      (state: RootState) => state.authState
    );

    logService.json(authState);
  };
}

export function* watchAuthStateSaga(logService: LogService) {
  logService.debug("start watch auth state saga");
  yield takeLatest(
    AUTH_ACTIONS.MUTATION.UPDATE_AUTH_STATE,
    createWatchAuthState(logService)
  );
}
