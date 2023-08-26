import React, { ReactElement } from "react";
import { User, UserRole } from "../types";
import { ForbiddenPage, HomePage } from "../pages";

// TODO: implement page guard higher order component (HOC)
export function withPageGuard(
  user: User | Partial<User> | null,
  roles: UserRole[],
  Page: ReactElement | any
): React.ReactElement {
  if (!user) return <HomePage />;

  if (roles.includes(user.role!)) return <Page />;

  return <ForbiddenPage />;
}
