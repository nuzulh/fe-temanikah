import { APP_ACTIONS } from "../../helpers";
import { AppState, PageRoute } from "../../types";

export function navigateToAction(route: PageRoute) {
  return {
    type: APP_ACTIONS.NAVIGATE_TO,
    payload: { route },
  };
}

export function showLoadingAction() {
  return {
    type: APP_ACTIONS.MUTATION.UPDATE_APP_STATE,
    payload: {
      isLoading: true,
    },
  };
}

export function hideLoadingAction() {
  return {
    type: APP_ACTIONS.MUTATION.UPDATE_APP_STATE,
    payload: {
      isLoading: false,
    },
  };
}

export function updateAppStateAction(
  appState: Partial<AppState>
) {
  return {
    type: APP_ACTIONS.MUTATION.UPDATE_APP_STATE,
    payload: { appState },
  };
}
