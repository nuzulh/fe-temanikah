import { PaymentName, PaymentType, Transactions } from "../../types";

export interface TransactionService {
  getAll(): Promise<Transactions>;
  postCreateTransaction(
    subscription_id: string,
    payment_type: PaymentType,
    payment_name: PaymentName
  ): Promise<any>;
}
