import { delay, put, select, takeLeading } from "redux-saga/effects";
import { LogService } from "../../services";
import { APP_ACTIONS, appStorage } from "../../helpers";
import { fetchAllSubscription, hideLoadingAction, updateAppStateAction, updateAuthStateAction } from "../actions";
import { AppState, DispatchAction, RootState, User } from "../../types";
import { Location, NavigateFunction } from "react-router-dom";
import { menuConfig } from "../../configs";

function createBootInit(logService: LogService) {
  return function* (action: DispatchAction<{
    navigate: NavigateFunction;
    location: Location;
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
      const { navigate, location } = action.payload;
      const currentPath = location.pathname.endsWith("/")
        ? location.pathname.substring(0, location.pathname.length - 1)
        : location.pathname;

      if (userStorage.role === "USER")
        yield put(fetchAllSubscription());

      // TODO: handle admin role stuff
      // if (userStorage.role === "ADMIN")
      // yield put(fetchAllSubscription());

      navigate(
        menuConfig.getByPath(currentPath)?.roles.includes(userStorage.role)
          ? currentPath
          : menuConfig.get("HOME").path
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
