import { APP_ACTIONS, getDefaultState } from "../../helpers";
import { AppState, DispatchAction } from "../../types";

export function appStateReducer(
  state: AppState = getDefaultState().appState,
  action: DispatchAction<AppState>
): AppState {
  switch (action.type) {
    // case APP_ACTIONS.NAVIGATE_TO:
    //   return {
    //     ...state,
    //     ...action.payload,
    //   };
    case APP_ACTIONS.MUTATION.UPDATE_APP_STATE:
      return {
        ...state,
        ...action.payload,
      };
    // case APP_ACTIONS.SHOW_POPUP:
    //   return {
    //     ...state,
    //     ...action.payload,
    //   };
    case APP_ACTIONS.MUTATION.RESET_APP_STATE:
      return getDefaultState().appState;
    default:
      return { ...state };
  }
} 
