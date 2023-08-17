import { all, takeEvery } from "redux-saga/effects";
import { LogService } from "../../services";
import { APP_ACTIONS } from "../../helpers";

export function createRootSaga(
  logService: LogService
) {
  logService.debug("start all saga");
  return function* () {
    yield all([
      takeEvery(
        APP_ACTIONS.SHOW_LOADING,
        function* () {
          yield logService.debug("ini adalah saga show loading...");
        }
      )
    ]);
  };
}
