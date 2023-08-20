import { all } from "redux-saga/effects";
import { LogService } from "../../../services";
import { watchAppStateSaga } from "./watch-app-state";
import { showPopupSaga } from "./show-popup";

export function* startAppSagas(logService: LogService) {
  logService.debug("start app sagas");
  yield all([
    watchAppStateSaga(logService),
    showPopupSaga(logService),
  ]);
}
