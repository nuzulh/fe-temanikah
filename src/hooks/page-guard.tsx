import { useRootState } from "./root-selector";
import { Navigate } from "react-router-dom";
import { menuConfig } from "../configs";

declare type PageGuardProps = {
  element: any;
};

export function PageGuard({ element }: PageGuardProps) {
  const user = useRootState((state) => state.authState.user);

  if (!user) return <Navigate to={menuConfig.get("HOME").path} />;

  if (user.token && user.isLoggedIn) return element;

  return <Navigate to={menuConfig.get("FORBIDDEN").path} />;
}

export function AuthPageGuard({ element }: PageGuardProps) {
  const user = useRootState((state) => state.authState.user);

  if (user?.token === null && user.role === "GUEST")
    return element;

  return <Navigate
    to={
      menuConfig.get(
        user?.role === "USER"
          ? "DASHBOARD"
          : user?.role === "ADMIN"
            ? "DASHBOARD"
            : "HOME")
        .path
    }
  />;
}
