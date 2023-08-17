import { combineReducers } from "redux";
import { appStateReducer } from "./app.reducer";
import { authStateReducer } from "./auth.reducer";

export const rootReducer = combineReducers({
  appState: appStateReducer,
  authState: authStateReducer,
});
