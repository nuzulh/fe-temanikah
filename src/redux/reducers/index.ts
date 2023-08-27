import { combineReducers } from "redux";
import { appStateReducer } from "./app.reducer";
import { authStateReducer } from "./auth.reducer";
import { subscriptionReducer } from "./subscription.reducer";
import { transactionReducer } from "./transaction.reducer";

export const rootReducer = combineReducers({
  appState: appStateReducer,
  authState: authStateReducer,
  subscriptionState: subscriptionReducer,
  transactionState: transactionReducer,
});
