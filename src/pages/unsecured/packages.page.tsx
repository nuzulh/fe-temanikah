import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Button, Card, Loading, ScreenContainer, Text } from "../../components";
import { useRootState } from "../../hooks";

export function PackagesPage() {
  const darkMode = useRootState((state) => state.appState.darkMode);
  const subscriptions = useRootState(
    (state) => state.subscriptionState.subscriptions
  );

  if (!subscriptions) return <Loading />;

  return (
    <ScreenContainer>
      {subscriptions.map((subs) => (
        <Card key={subs.id} title={subs.name} subtitle={subs.price.toString()}>
          {subs.features.map((feature, i) => (
            <Text key={i} className="text-sm">
              {feature}{"\n"}
            </Text>
          ))}
          <Button
            outline={!darkMode}
            className="mt-2"
            icon={faCartPlus}
          >
            Beli
          </Button>
        </Card>
      ))}
    </ScreenContainer>
  );
}
