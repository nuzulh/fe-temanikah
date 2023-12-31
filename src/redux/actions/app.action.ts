import { Location, NavigateFunction } from "react-router-dom";
import { APP_ACTIONS } from "../../helpers";
import { AppState, DispatchAction, Popup, PopupType } from "../../types";

export function startBootinit(
  navigate: NavigateFunction,
  location: Location
) {
  return {
    type: APP_ACTIONS.START_BOOT_INIT,
    payload: { navigate, location },
  };
}

export function showLoadingAction(): DispatchAction<
  Partial<AppState>
> {
  return {
    type: APP_ACTIONS.MUTATION.UPDATE_APP_STATE,
    payload: {
      isLoading: true,
    },
  };
}

export function hideLoadingAction(): DispatchAction<
  Partial<AppState>
> {
  return {
    type: APP_ACTIONS.MUTATION.UPDATE_APP_STATE,
    payload: {
      isLoading: false,
    },
  };
}

export function showPopupAction(
  type: PopupType,
  title: string,
  message: string,
  duration?: number,
): DispatchAction<Popup> {
  return {
    type: APP_ACTIONS.SHOW_POPUP,
    payload: {
      type,
      title,
      message,
      duration: duration ? duration : 2000,
    },
  };
}

export function switchDarkModeAction(
  darkMode: boolean
): DispatchAction<Partial<AppState>> {
  return {
    type: APP_ACTIONS.MUTATION.UPDATE_APP_STATE,
    payload: { darkMode }
  };
}

export function updateAppStateAction(
  appState: Partial<AppState>
): DispatchAction<Partial<AppState>> {
  return {
    type: APP_ACTIONS.MUTATION.UPDATE_APP_STATE,
    payload: { ...appState },
  };
}
