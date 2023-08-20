import { takeLeading } from "redux-saga/effects";
import { LogService } from "../../../services";
import { DispatchAction, Popup } from "../../../types";
import { APP_ACTIONS } from "../../../helpers";

function createShowPopup(logService: LogService) {
  return function* (actions: DispatchAction<Popup>) {
    logService.json(actions.payload);

    yield null;
  };
}

export function* showPopupSaga(logService: LogService) {
  logService.debug("start show popup saga");
  yield takeLeading(
    APP_ACTIONS.SHOW_POPUP,
    createShowPopup(logService)
  );
}
