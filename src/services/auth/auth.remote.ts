import { API, applyDefaultHeaders } from "../../helpers";
import { SelectStateFn } from "../../types";
import { AuthService } from "./auth.service";

export function createAuthService(
  select: SelectStateFn
): AuthService {
  return {
    postSignIn(email: string, password: string) {
      return API.post(
        "/auth/login",
        { email, password },
        { headers: applyDefaultHeaders() }
      );
    },
    postSignUp(email: string, password: string) {
      return API.post(
        "/auth/register",
        { email, password },
        { headers: applyDefaultHeaders() }
      );
    }
  };
}
