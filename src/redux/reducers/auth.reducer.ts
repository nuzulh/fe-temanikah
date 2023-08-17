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
    case AUTH_ACTIONS.SIGN_OUT:
      return {
        ...state
      };
    case AUTH_ACTIONS.RESULT.SIGN_IN_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case AUTH_ACTIONS.RESULT.SIGN_IN_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    case AUTH_ACTIONS.RESULT.SIGN_UP_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case AUTH_ACTIONS.RESULT.SIGN_UP_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return { ...state };
  }
} 
