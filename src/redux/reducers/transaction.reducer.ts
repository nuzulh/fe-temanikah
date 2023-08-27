import { TRANSACTION_ACTIONS, getDefaultState } from "../../helpers";
import { DispatchAction, TransactionState } from "../../types";

export function transactionReducer(
  state: TransactionState = getDefaultState().transactionState,
  action: DispatchAction<TransactionState>
): TransactionState {
  switch (action.type) {
    case TRANSACTION_ACTIONS.MUTATION.UPDATE_TRANSACTION_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case TRANSACTION_ACTIONS.MUTATION.RESET_TRANSACTION_STATE:
      return getDefaultState().transactionState;
    default:
      return { ...state };
  }
}
