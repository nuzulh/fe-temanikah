export declare type UserRole = "GUEST" | "CUSTOMER";

export declare type User = {
  email?: string;
  name?: string;
  accessToken?: string;
  isLoggedIn: boolean;
  isVerified: boolean;
  roles: UserRole;
};
