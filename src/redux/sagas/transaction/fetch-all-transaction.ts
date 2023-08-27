import { call, put, takeEvery } from "redux-saga/effects";
import { LogService, TransactionService } from "../../../services";
import { TRANSACTION_ACTIONS } from "../../../helpers";
import { hideLoadingAction, showLoadingAction, showPopupAction, updateTransactionAction } from "../../actions";
import { ApiResponse, TransactionStatus, Transactions } from "../../../types";

function createFetchAllTransaction(
  logService: LogService,
  transactionService: TransactionService
) {
  return function* () {
    logService.debug("fetching all transaction");
    yield put(showLoadingAction());

    try {
      const result: ApiResponse<Transactions> = yield call(
        transactionService.getAll
      );

      if (result.error) {
        yield put(showPopupAction(
          "ERROR",
          result.errorKey!,
          result.message!
        ));
        return;
      }

      yield put(updateTransactionAction({
        allTransactions: result.data!,
        pendingTransactions: result.data?.filter(
          (x) => x.status === TransactionStatus.PENDING
        ),
        expiredTransactions: result.data?.filter(
          (x) => x.status === TransactionStatus.EXPIRED
        ),
        canceledTransactions: result.data?.filter(
          (x) => x.status === TransactionStatus.CANCELED
        ),
        succeedTransactions: result.data?.filter(
          (x) => x.status === TransactionStatus.SUCCESS
        ),
      }));

    } catch (error) {
      logService.error(error);

    } finally {
      yield put(hideLoadingAction());
    }
  };
}

export function* startFetchAllTransaction(
  logService: LogService,
  transactionService: TransactionService
) {
  logService.debug("start fetch all transaction saga");
  yield takeEvery(
    TRANSACTION_ACTIONS.FETCH_ALL_TRANSACTION,
    createFetchAllTransaction(logService, transactionService)
  );
}
