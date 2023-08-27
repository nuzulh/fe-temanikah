export enum TransactionStatus {
  DECLINED = "declined",
  PENDING = "pending",
  EXPIRED = "expired",
  CANCELED = "canceled",
  SUCCESS = "success",
}

export enum PaymentType {
  BANK = "bank_transfer",
  QRIS = "qris",
}

export enum PaymentName {
  BCA = "bca",
  PERMATA = "permata",
  BRI = "bri",
  BNI = "bni",
  QRIS = "qris",
}

export declare type Transaction = {
  id: string;
  created_at: string;
  amount: number;
  status: TransactionStatus;
  subscription_name: string;
  user_email: string;
  payment_type: PaymentType;
  payment_name: PaymentName;
  va_number: string;
};

export declare type Transactions = Transaction[];

export declare type TransactionState = {
  allTransactions: Transactions | null;
  pendingTransactions: Transactions | null;
  expiredTransactions: Transactions | null;
  canceledTransactions: Transactions | null;
  succeedTransactions: Transactions | null;
};
