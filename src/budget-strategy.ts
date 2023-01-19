import { Stack } from 'aws-cdk-lib';
import { Email, SubscriptionType } from './utils';
import { aws_sns as sns } from 'aws-cdk-lib';
import { aws_budgets as budgets } from 'aws-cdk-lib';

export interface BudgetStrategyProps {
  monthlyBudgetInDollars: number;
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

  protected abstract createDailyAlerts(dailyBudget: number, subscribers: Array<budgets.CfnBudget.SubscriberProperty>): void;
  protected abstract createMonthlyAlerts(monthlyBudget: number, subscribers: Array<budgets.CfnBudget.SubscriberProperty>): void;
  protected createQuarterlyAlerts(quarterlyBudget: number, subscribers: Array<budgets.CfnBudget.SubscriberProperty>): void { };
  protected createYearlyAlerts(yearlyBudget: number, subscribers: Array<budgets.CfnBudget.SubscriberProperty>): void { };

  /**
   * creates all the daily, monthly, quaryerly, and yearly alerts based on the implementation of the related methods.
   */
  public createAlerts(): void {
    this.createDailyAlerts(this.dailyBudget, this.createAllSubscribers());
    this.createMonthlyAlerts(this.monthlyBudget, this.createAllSubscribers());
    this.createQuarterlyAlerts(this.quarterlyBudget, this.createAllSubscribers());
    this.createYearlyAlerts(this.yearlyBudget, this.createAllSubscribers());
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
   * calculates daily budget based on the provided daily budget.
   */
  public get dailyBudget(): number {
    return Math.floor(this.monthlyBudget / 30);
  }

  /**
   * returns montly budget.
   */
  public get monthlyBudget(): number {
    return this.props.monthlyBudgetInDollars;
  }

  /**
   * calculates quarterly budget based on the provided daily budget.
   */
  public get quarterlyBudget(): number {
    return this.monthlyBudget * 3;
  }

  /**
   * calculates yearly budget based on the provided daily budget.
   */
  public get yearlyBudget(): number {
    return this.dailyBudget * 365;
  }
}
