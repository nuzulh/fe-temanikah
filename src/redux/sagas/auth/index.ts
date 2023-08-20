import { all } from "redux-saga/effects";
import { AuthService, LogService } from "../../../services";
import { startSignInSaga } from "./sign-in";
import { startSignUpSaga } from "./sign-up";

export function* startAuthSagas(
  logService: LogService,
  authService: AuthService,
) {
  logService.debug("start auth sagas");
  yield all([
    startSignInSaga(logService, authService),
    startSignUpSaga(logService, authService),
  ]);
}
