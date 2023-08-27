import { select, takeLatest } from "redux-saga/effects";
import { LogService } from "../../../services";
import { RootState, TransactionState } from "../../../types";
import { TRANSACTION_ACTIONS } from "../../../helpers";

function createWatchTransaction(logService: LogService) {
  return function* () {
    logService.debug("--- transaction state has been updated");

    const transactionState: TransactionState = yield select(
      (state: RootState) => state.transactionState
    );

    logService.table(transactionState);
  };
}

export function* watchTransactionSaga(logService: LogService) {
  logService.debug("start watch transaction saga");
  yield takeLatest(
    TRANSACTION_ACTIONS.MUTATION.UPDATE_TRANSACTION_STATE,
    createWatchTransaction(logService)
  );
}
