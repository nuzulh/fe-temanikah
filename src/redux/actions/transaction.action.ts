import { TRANSACTION_ACTIONS } from "../../helpers";
import { DispatchAction, TransactionState } from "../../types";

export function fetchAllTransactionAction() {
  return {
    type: TRANSACTION_ACTIONS.FETCH_ALL_TRANSACTION,
  };
}

export function updateTransactionAction(
  transactionState: Partial<TransactionState>
): DispatchAction<Partial<TransactionState>> {
  return {
    type: TRANSACTION_ACTIONS.MUTATION.UPDATE_TRANSACTION_STATE,
    payload: {
      ...transactionState,
    },
  };
}

export function resetTransactionAction() {
  return {
    type: TRANSACTION_ACTIONS.MUTATION.RESET_TRANSACTION_STATE,
  };
}
