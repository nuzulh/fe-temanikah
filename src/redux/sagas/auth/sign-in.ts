import { call, put, select, takeLeading } from "redux-saga/effects";
import { AuthService, LogService } from "../../../services";
import { AUTH_ACTIONS } from "../../../helpers";
import {
  hideLoadingAction,
  showLoadingAction,
  showPopupAction,
  signInSuccessAction,
} from "../../actions";
import { ApiResponse, DispatchAction, RootState, User, UserRole } from "../../../types";
import { NavigateFunction } from "react-router-dom";
import { menuConfig } from "../../../configs";

function createSignIn(
  logService: LogService,
  authService: AuthService,
) {
  return function* (action: DispatchAction<{
    email: string;
    password: string;
    navigate: NavigateFunction;
  }>) {
    logService.debug("sign in user");
    yield put(showLoadingAction());

    try {
      const result: ApiResponse<Partial<User>> = yield call(
        authService.postSignIn,
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

      yield put(signInSuccessAction(result.data!));

      const userRole: UserRole = yield select(
        (state: RootState) => state.authState.user?.role
      );

      action.payload.navigate(
        menuConfig.get(
          userRole === "USER"
            ? "DASHBOARD"
            : userRole === "ADMIN"
              ? "DASHBOARD"
              : userRole === "GUEST"
                ? "HOME"
                : "UNKNOWN"
        ).path
      );

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
  yield takeLeading(
    AUTH_ACTIONS.SIGN_IN,
    createSignIn(logService, authService)
  );
}
