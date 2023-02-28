export type Email = string;
export type Optional<T> = { [k in keyof T]?: T[k] };
export type DeepOptional<T> = {
  [k in keyof T]?: T[k] extends object ? Optional<T[k]> : T[k];
};

export interface ITag {
  key: string;
  value: string | number;
}

export enum TimeUnit {
  DAILY = "DAILY",
  MONTHLY = "MONTHLY",
  QUARTERLY = "QUARTERLY",
  ANNUALLY = "ANNUALLY",
}

export enum NotificationType {
  ACTUAL = "ACTUAL",
  FORECASTED = "FORECASTED",
}

export enum ThresholdType {
  ABSOLUTE_VALUE = "ABSOLUTE_VALUE",
  PERCENTAGE = "PERCENTAGE",
}

export enum ComparisonOperator {
  EQUAL_TO = "EQUAL_TO",
  GREATER_THAN = "GREATER_THAN",
  LESS_THAN = "LESS_THAN",
}

export enum SubscriptionType {
  EMAIL = "EMAIL",
  SNS = "SNS",
}
