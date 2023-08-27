import { API, applyDefaultHeaders } from "../../helpers";
import { RootState, SelectStateFn } from "../../types";
import { TransactionService } from "./transaction.service";

export function createTransactionService(
  select: SelectStateFn
): TransactionService {
  return {
    getAll() {
      return API.get(
        "/transactions",
        {
          headers: applyDefaultHeaders(
            select((state: RootState) => state.authState.user?.token)
          ),
        }
      );
    },
    postCreateTransaction(subscription_id, payment_type, payment_name) {
      return API.post(
        "/transactions",
        { subscription_id, payment_type, payment_name },
        {
          headers: applyDefaultHeaders(
            select((state: RootState) => state.authState.user?.token)
          ),
        }
      );
    },
  };
}
