import { Subscription } from "../../types";

export interface SubscriptionService {
  getAll(): Promise<Subscription>;
  postSubscription(data: Subscription): Promise<any>;
  putSubscription(id: number, data: Partial<Subscription>): Promise<any>;
  deleteSubscription(id: number): Promise<any>;
}
