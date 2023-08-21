import { put, takeEvery } from "redux-saga/effects";
import { LogService } from "../../../services";
import { DispatchAction, PageRoute } from "../../../types";
import { APP_ACTIONS } from "../../../helpers";
import { menuConfig } from "../../../configs";
import { updateAppStateAction } from "../../actions";

function createNavigationHandler(logService: LogService) {
  return function* (action: DispatchAction<PageRoute>) {
    logService.debug(`handle navigation to ${action.payload.name}`);

    try {
      const { navigate, name, params } = action.payload;

      navigate(
        name === "BACK"
          ? -1 as any
          : menuConfig.get(name).path,
        { state: params }
      );

      yield put(updateAppStateAction({ selectedMenu: name }));

    } catch (error) {
      logService.error(error);
    }
  };
}

export function* startNavigationHandlerSaga(logService: LogService) {
  logService.debug("start navigation handler saga");
  yield takeEvery(
    APP_ACTIONS.NAVIGATE_TO,
    createNavigationHandler(logService)
  );
}
