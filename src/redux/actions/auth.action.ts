import { AUTH_ACTIONS } from "../../helpers";
import { User } from "../../types";

export function signInAction(
  email: string,
  password: string,
) {
  return {
    type: AUTH_ACTIONS.SIGN_IN,
    payload: { email, password },
  };
}

export function signInSuccessAction(user: User) {
  return {
    type: AUTH_ACTIONS.RESULT.SIGN_IN_SUCCESS,
    payload: {
      ...user,
      isLoggedIn: true,
    },
  };
}

export function signInErrorAction(error: Error) {
  return {
    type: AUTH_ACTIONS.RESULT.SIGN_IN_ERROR,
    payload: { error }
  };
}

export function signUpAction(
  name: string,
  email: string,
  password: string,
) {
  return {
    type: AUTH_ACTIONS.SIGN_UP,
    payload: {
      name,
      email,
      password,
    },
  };
}

export function signUpSuccessAction(user: User) {
  return {
    type: AUTH_ACTIONS.RESULT.SIGN_UP_SUCCESS,
    payload: { user },
  };
}

export function signUpErrorAction(error: Error) {
  return {
    type: AUTH_ACTIONS.RESULT.SIGN_UP_ERROR,
    payload: { error }
  };
}

export function signOutAction() {
  return {
    type: AUTH_ACTIONS.SIGN_OUT,
  };
}
