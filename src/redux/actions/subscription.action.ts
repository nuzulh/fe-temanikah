import { SUBSCRIPTION_ACTIONS } from "../../helpers";
import { DispatchAction, Subscription, SubscriptionState } from "../../types";

export function fetchAllSubscriptionAction() {
  return {
    type: SUBSCRIPTION_ACTIONS.FETCH_ALL_SUBSCRIPTION,
  };
}

export function updateSubscriptionAction(
  subscriptionState: SubscriptionState
): DispatchAction<Partial<SubscriptionState>> {
  return {
    type: SUBSCRIPTION_ACTIONS.MUTATION.UPDATE_SUBSCRIPTION_STATE,
    payload: { ...subscriptionState },
  };
}

export function selectSubscriptionAction(
  subscription: Subscription
): DispatchAction<Partial<SubscriptionState>> {
  return {
    type: SUBSCRIPTION_ACTIONS.MUTATION.UPDATE_SUBSCRIPTION_STATE,
    payload: {
      selectedSubscription: subscription,
    },
  };
}

export function resetSubscriptionAction() {
  return {
    type: SUBSCRIPTION_ACTIONS.MUTATION.RESET_SUBSCRIPTION_STATE,
  };
}
