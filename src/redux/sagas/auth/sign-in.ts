import { call, put, takeLeading } from "redux-saga/effects";
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
  return function* (action: DispatchAction<{
    email: string;
    password: string;
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

      // TODO: Handle signin success
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
  yield takeLeading(
    AUTH_ACTIONS.SIGN_IN,
    createSignIn(logService, authService)
  );
}
