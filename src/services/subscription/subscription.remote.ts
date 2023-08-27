import { API, applyDefaultHeaders } from "../../helpers";
import { SelectStateFn } from "../../types";
import { SubscriptionService } from "./subscription.service";

export function createSubscriptionService(
  select: SelectStateFn
): SubscriptionService {
  return {
    getAll() {
      return API.get(
        "/subscriptions",
        {
          headers: applyDefaultHeaders(
            select((state) => state.authState.user?.token)
          ),
        }
      );
    },
    postSubscription(data) {
      return API.post(
        "/subscriptions",
        data,
        {
          headers: applyDefaultHeaders(
            select((state) => state.authState.user?.token)
          ),
        }
      );
    },
    putSubscription(id, data) {
      return API.put(
        "/subscriptions",
        { id, ...data },
        {
          headers: applyDefaultHeaders(
            select((state) => state.authState.user?.token)
          ),
        }
      );
    },
    deleteSubscription(id) {
      return API.delete(
        `/subscriptions?id=${id}`,
        {
          headers: applyDefaultHeaders(
            select((state) => state.authState.user?.token)
          ),
        }
      );
    },
  };
}
