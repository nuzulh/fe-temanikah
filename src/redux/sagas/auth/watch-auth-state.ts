import { select, takeLatest } from "redux-saga/effects";
import { LogService } from "../../../services";
import { AUTH_ACTIONS, appStorage } from "../../../helpers";
import { AuthState, RootState } from "../../../types";

function createWatchAuthState(logService: LogService) {
  return function* () {
    logService.debug("--- auth state has been updated");

    const authState: AuthState = yield select(
      (state: RootState) => state.authState
    );

    if (authState.user && authState.user.token)
      appStorage.set({
        role: authState.user.role,
        token: authState.user.token,
      });

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
