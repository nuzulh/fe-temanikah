import { NavigateFunction } from "react-router-dom";
import { AUTH_ACTIONS } from "../../helpers";
import { AuthState, DispatchAction, User, UserRole } from "../../types";

export function signInAction(
  email: string,
  password: string,
  navigate: NavigateFunction
) {
  return {
    type: AUTH_ACTIONS.SIGN_IN,
    payload: { email, password, navigate },
  };
}

export function signInSuccessAction(
  user: Partial<User>
): DispatchAction<Partial<AuthState>> {
  return {
    type: AUTH_ACTIONS.MUTATION.UPDATE_AUTH_STATE,
    payload: {
      user: {
        ...user,
        role: user.role?.toUpperCase() as UserRole,
        isLoggedIn: true,
      },
    },
  };
}

export function signUpAction(
  email: string,
  password: string,
  navigate: NavigateFunction
) {
  return {
    type: AUTH_ACTIONS.SIGN_UP,
    payload: { email, password, navigate },
  };
}

export function signUpSuccessAction(
  user: Partial<User>
): DispatchAction<Partial<AuthState>> {
  return {
    type: AUTH_ACTIONS.MUTATION.UPDATE_AUTH_STATE,
    payload: {
      user: {
        ...user,
        role: user.role?.toUpperCase() as UserRole,
      },
    },
  };
}

export function signOutAction(navigate: NavigateFunction) {
  return {
    type: AUTH_ACTIONS.SIGN_OUT,
    payload: { navigate },
  };
}

export function updateAuthStateAction(
  user: Partial<User>
): DispatchAction<Partial<AuthState>> {
  return {
    type: AUTH_ACTIONS.MUTATION.UPDATE_AUTH_STATE,
    payload: { user },
  };
}
