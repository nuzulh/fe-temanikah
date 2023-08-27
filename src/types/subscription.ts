export declare type Subscription = {
  id: number;
  created_at: string;
  name: string;
  price: number;
  features: string[];
  duration: number;
};

export declare type Subscriptions = Subscription[];

export declare type SubscriptionState = {
  subscriptions: Subscriptions | null;
  selectedSubscription: Subscription | null;
};
