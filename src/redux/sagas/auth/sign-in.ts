import { call, put, takeEvery } from "redux-saga/effects";
import { AuthService, LogService } from "../../../services";
import { AUTH_ACTIONS } from "../../../helpers";
import {
  hideLoadingAction,
  showLoadingAction,
  showPopupAction,
  signInSuccessAction,
} from "../../actions";
import { ApiResponse, DispatchAction, User } from "../../../types";

function createSignIn(
  logService: LogService,
  authService: AuthService,
) {
  return function* (actions: DispatchAction<{
    email: string;
    password: string;
  }>) {
    logService.debug("sign in user");
    yield put(showLoadingAction());

    try {
      const result: ApiResponse<Partial<User>> = yield call(
        authService.postSignIn,
        actions.payload.email,
        actions.payload.password
      );

      if (result.error) {
        yield put(showPopupAction(
          "ERROR",
          result.errorKey!,
          result.message!,
        ));
        return;
      }

      logService.json(result.data!);
      yield put(signInSuccessAction(result.data!));

    } catch (error) {
      logService.error(error);

    } finally {
      yield put(hideLoadingAction());
    }
  };
}

export function* startSignInSaga(
  logService: LogService,
  authService: AuthService,
) {
  logService.debug("start sign in saga");
  yield takeEvery(
    AUTH_ACTIONS.SIGN_IN,
    createSignIn(logService, authService)
  );
}
