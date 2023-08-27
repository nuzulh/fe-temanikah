import { delay, put, select, takeLeading } from "redux-saga/effects";
import { LogService } from "../../services";
import { APP_ACTIONS, appStorage } from "../../helpers";
import { AppState, DispatchAction, RootState, User } from "../../types";
import { Location, NavigateFunction } from "react-router-dom";
import { menuConfig } from "../../configs";
import {
  fetchAllSubscriptionAction,
  fetchAllTransactionAction,
  hideLoadingAction,
  updateAppStateAction,
  updateAuthStateAction,
} from "../actions";

function createBootInit(logService: LogService) {
  return function* (action: DispatchAction<{
    navigate: NavigateFunction;
    location: Location;
  }>) {
    logService.debug("initialize boot");

    const appStateStorage = appStorage.get<AppState>();
    const userStorage = appStorage.get<User>();
    const appState: AppState = yield select(
      (state: RootState) => state.appState
    );

    // HANDLE EMPTY STORAGE
    yield delay(200);
    if (!appStateStorage) appStorage.set({
      language: appState.language,
      darkMode: appState.darkMode,
      role: "GUEST",
    });

    if (
      appStateStorage?.language ||
      appStateStorage?.darkMode ||
      userStorage?.token ||
      userStorage?.role
    ) {
      // HANDLE APP STATE
      yield delay(200);
      yield put(updateAppStateAction({
        language: appStateStorage?.language,
        darkMode: appStateStorage?.darkMode,
      }));

      // HANDLE AUTH STATE
      yield delay(200);
      yield put(
        updateAuthStateAction({
          token: userStorage?.token || null,
          role: userStorage?.role || "GUEST",
          isLoggedIn: userStorage?.token ? true : false,
        })
      );
    }

    // HANDLE PUBLIC FETCH
    yield put(fetchAllSubscriptionAction());

    // HANDLE PRIVATE FETCH
    if (userStorage && userStorage.role !== "GUEST") {
      yield put(fetchAllTransactionAction());
    }

    // HANDLE NAVIGATION
    yield delay(200);
    const { navigate, location } = action.payload;
    const currentPath = location.pathname.endsWith("/")
      ? location.pathname.substring(0, location.pathname.length - 1)
      : location.pathname;

    navigate(
      menuConfig.getByPath(currentPath)?.roles.includes(
        userStorage?.role || "GUEST"
      )
        ? currentPath
        : menuConfig.get("HOME").path
    );

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
