import { SUBSCRIPTION_ACTIONS } from "../../helpers";
import { DispatchAction, Subscription, SubscriptionState } from "../../types";

export function fetchAllSubscription() {
  return {
    type: SUBSCRIPTION_ACTIONS.FETCH_ALL,
  };
}

export function updateSubscriptionState(
  subscriptionState: SubscriptionState
): DispatchAction<Partial<SubscriptionState>> {
  return {
    type: SUBSCRIPTION_ACTIONS.MUTATION.UPDATE_SUBSCRIPTION_STATE,
    payload: { ...subscriptionState },
  };
}

export function selectSubscription(
  subscription: Subscription
): DispatchAction<Partial<SubscriptionState>> {
  return {
    type: SUBSCRIPTION_ACTIONS.MUTATION.UPDATE_SUBSCRIPTION_STATE,
    payload: {
      selectedSubscription: subscription,
    },
  };
}
