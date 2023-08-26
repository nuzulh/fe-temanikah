import { ScreenContainer, Text } from "../../components";
import { useRootState } from "../../hooks";

export function ProfilePage() {
  const user = useRootState((state) => state.authState.user);

  return (
    <ScreenContainer>
      <Text className="font-semibold">Informasi Profile</Text>
      <Text>Email: {user?.email ?? "gtw"}</Text>
      <Text>Role: {user?.role ?? "gtw"}</Text>
      <Text>Token: {user?.token ?? "gtw"}</Text>
      <Text>Is Loggedin: {user?.isLoggedIn?.toString() ?? "gtw"}</Text>
    </ScreenContainer>
  );
}
