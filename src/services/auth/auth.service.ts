import { User } from "../../types";

export interface AuthService {
  postSignIn(email: string, password: string): Promise<Partial<User>>;
  postSignUp(email: string, password: string): Promise<Partial<User>>;
}
