import { delay, put, select, takeLeading } from "redux-saga/effects";
import { LogService } from "../../services";
import { APP_ACTIONS, appStorage } from "../../helpers";
import { hideLoadingAction, updateAppStateAction, updateAuthStateAction } from "../actions";
import { AppState, DispatchAction, RootState, User } from "../../types";
import { NavigateFunction } from "react-router-dom";
import { menuConfig } from "../../configs";

function createBootInit(logService: LogService) {
  return function* (action: DispatchAction<{
    navigate: NavigateFunction;
  }>) {
    logService.debug("initialize boot");

    const appStateStorage = appStorage.get<AppState>();
    const userStorage = appStorage.get<User>();
    const rootState: RootState = yield select(
      (state) => state
    );

    // HANDLE EMPTY STORAGE
    if (!appStateStorage) appStorage.set({
      language: rootState.appState.language,
      darkMode: rootState.appState.darkMode,
      role: "GUEST",
    });

    // HANDLE APP STATE
    if (appStateStorage?.language && appStateStorage.darkMode)
      yield put(updateAppStateAction({
        language: appStateStorage?.language,
        darkMode: appStateStorage?.darkMode,
      }));

    // HANDLE AUTH STATE
    if (userStorage?.token && userStorage.role) {
      yield put(
        updateAuthStateAction({
          token: userStorage.token,
          role: userStorage.role,
          isLoggedIn: true,
        })
      );

      // HANDLE NAVIGATION
      action.payload.navigate(
        menuConfig.get(
          userStorage.role === "USER"
            ? "DASHBOARD"
            : userStorage.role === "ADMIN"
              ? "DASHBOARD"
              : userStorage.role === "GUEST"
                ? "HOME"
                : "UNKNOWN"
        ).path
      );
    }

    yield delay(1500);
    yield put(hideLoadingAction());
  };
}

export function* bootInitSaga(logService: LogService) {
  logService.debug("start boot init saga");
  yield takeLeading(
    APP_ACTIONS.START_BOOT_INIT,
    createBootInit(logService)
  );
}
