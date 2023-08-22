import { delay, put, select, takeLeading } from "redux-saga/effects";
import { LogService } from "../../services";
import { APP_ACTIONS, appStorage } from "../../helpers";
import { hideLoadingAction, updateAppStateAction, updateAuthStateAction } from "../actions";
import { AppState, RootState, User } from "../../types";

function createBootInit(logService: LogService) {
  return function* () {
    logService.debug("initialize boot");

    const appStateStorage = appStorage.get<AppState>();
    const userStorage = appStorage.get<User>();
    const rootState: RootState = yield select(
      (state) => state
    );

    if (!appStateStorage || !userStorage) appStorage.set({
      language: rootState.appState.language,
      darkMode: rootState.appState.darkMode,
      role: rootState.authState.user?.role || "GUEST",
    });

    yield put(updateAppStateAction({
      language: appStateStorage?.language,
      darkMode: appStateStorage?.darkMode,
    }));

    if (userStorage?.token) yield put(
      updateAuthStateAction({
        token: userStorage.token,
        isLoggedIn: true,
      })
    );

    yield delay(1500);
    yield put(hideLoadingAction());
  };
}

export function* bootInitSaga(logService: LogService) {
  logService.debug("start boot init saga");
  yield takeLeading(
    APP_ACTIONS.START_BOOT_INIT,
    createBootInit(logService),
  );
}
