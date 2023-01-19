import { Stack, Tags } from 'aws-cdk-lib';
import { Budget } from "./budget";
import { BudgetStrategyProps, IBudgetStrategy } from "./budget-strategy";
import { TimeUnit } from "./utils";
import { aws_budgets as budgets } from 'aws-cdk-lib';

export interface ApplicationBudgetStrategyProps extends BudgetStrategyProps {
  applicationName: string;
  otherStacksIncludedInBudget?: Stack[];
}

export class ApplicationBudgetStrategy extends IBudgetStrategy {
  readonly applicationName: string;
  private otherStacks: Stack[];

  /**
   * Default Application BudgetStrategy class that implements daily and monthly alerts.
   * 
   * @param stack - default stack to track its resources and it will be used to define Budget resources in it.
   * @param props.applicationName - the name of application to label resources with it.
   * @param props.otherStacksIncludedInBudget - optional other stack to track their resources alog with the default stack.
   * @param props.monthlyBudget - montly budget in US Dollors.
   * @param props.defaultTopic - default SNS topic name. Only if provided, the BudgetStratgy creates an SNS topic and send notifications to it.
   * @param props.subscribers - list of email address that the BudgetStrategy will use to send alerts to.
   * 
   * @example tracking budget for an application called `my-application`:
   * ```
   * const app = new cdk.App();
   * const firstStack = new FirstStack(app, 'FirstStack', {});
   * const secondStack = new SecondStack(app, 'SecondStack', {});
   * const budgetStratgy = new DefaultApplicationBudgetStrategy(firstStack, {
   *   applicationName: 'my-application',
   *   monthlyBudget: 200,
   *  // Optional (you can add as many stack as you want)
   *   otherStacksToMonitor: [
   *     secondStack
   *   ],
   *   subscribers: [
   *     'internal-service-notif-aaaaht4ubhydfc344peefwt6ye@datachef-engineering.slack.com',
   *     'kiarash.kiani@datachef.nl'
   *   ]
   * });
   * 
   * budgetStratgy.createBudgets();
   * ```
   */
  constructor(stack: Stack, props: ApplicationBudgetStrategyProps) {
    super(stack, props);
    this.applicationName = props.applicationName;
    this.otherStacks = props.otherStacksIncludedInBudget ?? [];
  }

  protected createDailyAlerts(dailyBudget: number, subscribers: Array<budgets.CfnBudget.SubscriberProperty>): void {
    new Budget(this.stack, `application_${this.applicationName}_daily_${dailyBudget}_%80`, {
      tags: [
        { key: this.applicationTagKey, value: this.applicationName },
      ],
      limit: dailyBudget,
      subscribers: subscribers,
      alertContdition: {
        period: TimeUnit.DAILY,
        threshold: 80,
      },
    })
      .clone(`application_${this.applicationName}_daily_${dailyBudget}_%100`, { alertContdition: { threshold: 100 } })
  }

  protected createMonthlyAlerts(monthlyBudget: number, subscribers: Array<budgets.CfnBudget.SubscriberProperty>): void {
    new Budget(this.stack, `application_${this.applicationName}_monthly_${monthlyBudget}_%90`, {
      tags: [
        { key: this.applicationTagKey, value: this.applicationName },
      ],
      limit: monthlyBudget,
      subscribers: subscribers,
      alertContdition: {
        period: TimeUnit.MONTHLY,
        threshold: 90,
      },
    })
      .clone(`application_${this.applicationName}_monthly_${monthlyBudget}_%95`, { alertContdition: { threshold: 95 } })
      .clone(`application_${this.applicationName}_monthly_${monthlyBudget}_%98`, { alertContdition: { threshold: 98 } })
      .clone(`application_${this.applicationName}_monthly_${monthlyBudget}_%99`, { alertContdition: { threshold: 99 } })
  }

  private tagAllStacks(): void {
    [...this.otherStacks, this.stack].forEach((stack) => {
      Tags.of(stack).add(this.applicationTagKey, this.applicationName);
    });
  }

  /**
   * Creates all the alarms and budgets and tags all resources with the application's name.
   */
  public createBudgets(): void {
    this.tagAllStacks();
    this.createAlerts();
  }

  protected get applicationTagKey(): string {
    return 'bm:application';
  }
}
