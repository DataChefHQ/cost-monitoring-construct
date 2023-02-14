import { Stack } from 'aws-cdk-lib';
import { Email, SubscriptionType } from './utils';
import { aws_sns as sns } from 'aws-cdk-lib';
import { aws_budgets as budgets } from 'aws-cdk-lib';

export interface BudgetStrategyProps {
  monthlyLimitInDollars: number;
  defaultTopic?: string;
  subscribers?: Array<Email>;
}

export abstract class IBudgetStrategy {
  private props: BudgetStrategyProps;
  private _defaultTopic?: sns.Topic;
  protected stack: Stack;

  /**
   * defines the stratcure of a BudgetStategy class.
   * 
   * @param construct - use to define it's resources inside it.
   * @param props.monthlyBudget - montly budget in US Dollors.
   * @param props.defaultTopic - default SNS topic name. Only if provided, the BudgetStratgy creates an SNS topic and send notifications to it.
   * @param props.subscribers - list of email address that the BudgetStrategy will use to send alerts to.
   */
  constructor(construct: Stack, props: BudgetStrategyProps) {
    this.stack = construct;
    this.props = props;

    if (props.defaultTopic) {
      this._defaultTopic = new sns.Topic(this.stack, `${props.defaultTopic}-topic`, {
        topicName: props.defaultTopic,
      });
    }
  }

  protected abstract createDailyBudgets(dailyLimit: number, subscribers: Array<budgets.CfnBudget.SubscriberProperty>): void;
  protected abstract createMonthlyBudgets(monthlyLimit: number, subscribers: Array<budgets.CfnBudget.SubscriberProperty>): void;
  protected createQuarterlyBudgets(quarterlyLimit: number, subscribers: Array<budgets.CfnBudget.SubscriberProperty>): void { };
  protected createYearlyBudgets(yearlyLimit: number, subscribers: Array<budgets.CfnBudget.SubscriberProperty>): void { };

  /**
   * creates all the daily, monthly, quaryerly, and yearly budgets based on the implementation of the related methods.
   */
  public createAlerts(): void {
    this.createDailyBudgets(this.dailyLimit, this.createAllSubscribers());
    this.createMonthlyBudgets(this.monthlyLimit, this.createAllSubscribers());
    this.createQuarterlyBudgets(this.quarterlyLimit, this.createAllSubscribers());
    this.createYearlyBudgets(this.yearlyLimit, this.createAllSubscribers());
  }

  private createAllSubscribers(): Array<budgets.CfnBudget.SubscriberProperty> {
    const snsSubscriber = this.createSNSSubscriber();

    if (snsSubscriber) {
      return [
        ...this.createEmailSubscribers(),
        snsSubscriber
      ];
    }
    else {
      return this.createEmailSubscribers();
    }
  }

  private createSNSSubscriber(): budgets.CfnBudget.SubscriberProperty | undefined {
    if (!this.defaultTopic) {
      return;
    }

    return {
      subscriptionType: SubscriptionType.SNS,
      address: this.defaultTopic?.topicArn,
    };
  }

  private createEmailSubscribers(): Array<budgets.CfnBudget.SubscriberProperty> {
    return this.props.subscribers?.map((email) => {
      return {
        subscriptionType: SubscriptionType.EMAIL,
        address: email,
      }
    }) ?? [];
  }

  /**
   * Return default SNS topic only if the defultTopic prop has been passed when instantiating.
   */
  public get defaultTopic(): sns.Topic | undefined {
    return this._defaultTopic;
  }

  /**
   * calculates daily limit based on the provided monthly limit.
   */
  public get dailyLimit(): number {
    return Math.floor(this.monthlyLimit / 30);
  }

  /**
   * returns montly limit.
   */
  public get monthlyLimit(): number {
    return this.props.monthlyLimitInDollars;
  }

  /**
   * calculates quarterly limit based on the provided monthly limit.
   */
  public get quarterlyLimit(): number {
    return this.monthlyLimit * 3;
  }

  /**
   * calculates yearly limit based on the provided daily budget.
   */
  public get yearlyLimit(): number {
    return this.dailyLimit * 365;
  }
}
