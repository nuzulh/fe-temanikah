import { takeLeading } from "redux-saga/effects";
import { LogService } from "../../../services";
import { DispatchAction, Popup } from "../../../types";
import { APP_ACTIONS } from "../../../helpers";
import toast from "react-hot-toast";

function createShowPopup(logService: LogService) {
  return function* (action: DispatchAction<Popup>) {
    logService.debug("showing popup alert message");

    const { message, duration } = action.payload;
    yield toast(message, { duration });
  };
}

export function* startShowPopupSaga(logService: LogService) {
  logService.debug("start show popup saga");
  yield takeLeading(
    APP_ACTIONS.SHOW_POPUP,
    createShowPopup(logService)
  );
}
