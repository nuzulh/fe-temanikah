import { call, put, takeLeading } from "redux-saga/effects";
import { AuthService, LogService } from "../../../services";
import { AUTH_ACTIONS } from "../../../helpers";
import {
  hideLoadingAction,
  showLoadingAction,
  showPopupAction,
  signUpSuccessAction,
} from "../../actions";
import { ApiResponse, DispatchAction, User } from "../../../types";
import { NavigateFunction } from "react-router-dom";
import { menuConfig } from "../../../configs";

function createSignUp(
  logService: LogService,
  authService: AuthService,
) {
  return function* (action: DispatchAction<{
    email: string;
    password: string;
    navigate: NavigateFunction;
  }>) {
    logService.debug("signin up user");
    yield put(showLoadingAction());

    try {
      const result: ApiResponse<Partial<User>> = yield call(
        authService.postSignUp,
        action.payload.email,
        action.payload.password
      );

      if (result.error) {
        yield put(showPopupAction(
          "ERROR",
          result.errorKey!,
          result.message!,
        ));
        return;
      }

      yield put(signUpSuccessAction(result.data!));
      yield put(
        showPopupAction(
          "SUCCESS",
          "Daftar berhasil",
          "Silahkan melakukan login"
        )
      );

      action.payload.navigate(menuConfig.get("SIGNIN").path);

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
  yield takeLeading(
    AUTH_ACTIONS.SIGN_UP,
    createSignUp(logService, authService)
  );
}
