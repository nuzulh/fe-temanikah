import { takeLeading } from "redux-saga/effects";
import { LogService } from "../../../services";
import { DispatchAction, Popup } from "../../../types";
import { APP_ACTIONS } from "../../../helpers";

function createShowPopup(logService: LogService) {
  return function* (action: DispatchAction<Popup>) {
    logService.json(action.payload);

    yield null;
  };
}

export function* startShowPopupSaga(logService: LogService) {
  logService.debug("start show popup saga");
  yield takeLeading(
    APP_ACTIONS.SHOW_POPUP,
    createShowPopup(logService)
  );
}
