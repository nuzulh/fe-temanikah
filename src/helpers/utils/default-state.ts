import { RootState } from "../../types";

export function getDefaultState(): RootState {
  return {
    appState: {
      darkMode: false,
      language: "ID",
      isLoading: true,
    },
    authState: {
      user: null,
      // isError: false,
      // error: null,
    },
    subscriptionState: {
      subscriptions: null,
      selectedSubscription: null,
    },
    transactionState: {
      allTransactions: null,
      pendingTransactions: null,
      expiredTransactions: null,
      canceledTransactions: null,
      succeedTransactions: null,
    },
  };
}
