export declare type UserRole = "GUEST" | "USER" | "ADMIN";

export declare type User = {
  id?: string;
  name?: string;
  email?: string;
  role?: UserRole;
  token?: string | null;
  isVerified?: boolean;
  isLoggedIn: boolean;
};
