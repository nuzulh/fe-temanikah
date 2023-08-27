import { all } from "redux-saga/effects";
import { LogService, TransactionService } from "../../../services";
import { watchTransactionSaga } from "./watch-transaction-state";
import { startFetchAllTransaction } from "./fetch-all-transaction";

export function* startTransactionSagas(
  logService: LogService,
  transactionService: TransactionService
) {
  logService.debug("start transaction sagas...");
  yield all([
    watchTransactionSaga(logService),
    startFetchAllTransaction(logService, transactionService),
  ]);
}
