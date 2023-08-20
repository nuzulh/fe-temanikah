import { AUTH_ACTIONS, getDefaultState } from "../../helpers";
import { AuthState, DispatchAction } from "../../types";

export function authStateReducer(
  state: AuthState = getDefaultState().authState,
  action: DispatchAction<AuthState>
): AuthState {
  switch (action.type) {
    case AUTH_ACTIONS.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      };
    case AUTH_ACTIONS.SIGN_UP:
      return {
        ...state,
        ...action.payload,
      };
    case AUTH_ACTIONS.MUTATION.UPDATE_AUTH_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case AUTH_ACTIONS.SIGN_OUT:
      return getDefaultState().authState;
    case AUTH_ACTIONS.MUTATION.RESET_AUTH_STATE:
      return getDefaultState().authState;
    default:
      return { ...state };
  }
} 
