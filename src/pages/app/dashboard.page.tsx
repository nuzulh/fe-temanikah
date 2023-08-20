import { ScreenContainer } from "../../components";
import { useRootState } from "../../hooks";

export function Dashboard() {
  const user = useRootState((state) => state.authState.user);

  return (
    <ScreenContainer>
      <h1>dhasboar</h1>
      <p>email: {user?.email}</p>
      <p>role: {user?.role}</p>
      <p>token: {user?.token}</p>
      <p>isLoggedIn: {user?.isLoggedIn}</p>
    </ScreenContainer>
  );
}
