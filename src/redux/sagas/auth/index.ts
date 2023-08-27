import { all } from "redux-saga/effects";
import { AuthService, LogService } from "../../../services";
import { startSignInSaga } from "./sign-in";
import { startSignUpSaga } from "./sign-up";
import { watchAuthStateSaga } from "./watch-auth-state";
import { startSignOutSaga } from "./sign-out";

export function* startAuthSagas(
  logService: LogService,
  authService: AuthService,
) {
  logService.debug("start auth sagas...");
  yield all([
    watchAuthStateSaga(logService),
    startSignInSaga(logService, authService),
    startSignUpSaga(logService, authService),
    startSignOutSaga(logService),
  ]);
}
