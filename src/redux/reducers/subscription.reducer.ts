import { SUBSCRIPTION_ACTIONS, getDefaultState } from "../../helpers";
import { DispatchAction, SubscriptionState } from "../../types";

export function subscriptionReducer(
  state: SubscriptionState = getDefaultState().subscriptionState,
  action: DispatchAction<SubscriptionState>
): SubscriptionState {
  switch (action.type) {
    case SUBSCRIPTION_ACTIONS.MUTATION.UPDATE_SUBSCRIPTION_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case SUBSCRIPTION_ACTIONS.MUTATION.RESET_SUBSCRIPTION_STATE:
      return getDefaultState().subscriptionState;
    default:
      return { ...state };
  }
}
