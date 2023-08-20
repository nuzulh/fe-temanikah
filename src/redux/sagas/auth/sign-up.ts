import { call, put, takeEvery } from "redux-saga/effects";
import { AuthService, LogService } from "../../../services";
import { AUTH_ACTIONS } from "../../../helpers";
import {
  hideLoadingAction,
  showLoadingAction,
  showPopupAction,
  signUpSuccessAction,
} from "../../actions";
import { ApiResponse, DispatchAction, User } from "../../../types";

function createSignUp(
  logService: LogService,
  authService: AuthService,
) {
  return function* (actions: DispatchAction<{
    email: string;
    password: string;
  }>) {
    logService.debug("signin up user");
    yield put(showLoadingAction());

    try {
      const result: ApiResponse<Partial<User>> = yield call(
        authService.postSignUp,
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

      // TODO: Handle signup success
      logService.json(result.data!);
      yield put(signUpSuccessAction(result.data!));

    } catch (error) {
      logService.error(error);

    } finally {
      yield put(hideLoadingAction());
    }
  };
}

export function* startSignUpSaga(
  logService: LogService,
  authService: AuthService,
) {
  logService.debug("start sign up saga");
  yield takeEvery(
    AUTH_ACTIONS.SIGN_UP,
    createSignUp(logService, authService)
  );
}