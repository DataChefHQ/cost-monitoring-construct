import { Stack, Tags, aws_budgets as budgets } from "aws-cdk-lib";
import { Budget } from "./budget";
import { IBudgetStrategyProps, IBudgetStrategy } from "./budget-strategy";
import { TimeUnit } from "./utils";

export interface IApplicationCostMonitoringProps extends IBudgetStrategyProps {
  applicationName: string;
  otherStacksIncludedInBudget?: Stack[];
  costAllocationTag?: string;
}

export class ApplicationCostMonitoringProps implements IApplicationCostMonitoringProps {
  /**
   * @param applicationName - the name of application to label resources with it.
   * @param monthlyLimitInDollars - montly limit in US Dollors.
   * @param otherStacksIncludedInBudget - optional other stack to track their resources alog with the default stack.
   * @param defaultTopic - default SNS topic name. Only if provided, the BudgetStratgy creates an SNS topic and send notifications to it.
   * @param subscribers - list of email address that the CostMonitoring will use to send alerts to.
   * @param costAllocationTag - Tag key used to track resources' expenditure. Only if provided, it will be used to tag the application resources. Defaults to `cm:application`
   */
  constructor(
    public applicationName: string,
    public monthlyLimitInDollars: number,
    public subscribers: string[],
    public otherStacksIncludedInBudget?: Stack[],
    public defaultTopic?: string,
    public costAllocationTag?: string
  ) {}
}

export class ApplicationCostMonitoring extends IBudgetStrategy {
  readonly applicationName: string;
  private otherStacks: Stack[];
  private costAllocationTag?: string

  /**
   * Default Application CostMonitoring class that implements daily and monthly budgets.
   *
   * @param stack - default stack to track its resources and it will be used to define Budget resources in it.
   * @param props.applicationName - the name of application to label resources with it.
   * @param props.otherStacksIncludedInBudget - optional other stack to track their resources alog with the default stack.
   * @param props.monthlyLimitInDollars - montly limit in US Dollors.
   * @param props.defaultTopic - default SNS topic name. Only if provided, the BudgetStratgy creates an SNS topic and send notifications to it.
   * @param props.subscribers - list of email address that the CostMonitoring will use to send alerts to.
   * @param props.costAllocationTag - Tag key used to track resources' expenditure. Only if provided, it will be used to tag the application resources. Defaults to `cm:application`
   *
   * @example
   * Tracking budget for an application called `my-application`
   *
   * const app = new cdk.App();
   * const firstStack = new FirstStack(app, 'FirstStack', {});
   * const secondStack = new SecondStack(app, 'SecondStack', {});
   * const costMonitoring = new ApplicationCostMonitoring(firstStack, {
   *   applicationName: 'my-application',
   *   monthlyLimitInDollars : 200,
   *   otherStacksToMonitor: [secondStack], // Optional (you can add as many stacks as you want)
   *   subscribers: ['alert@mymail.com']
   * });
   *
   * budgetStratgy.monitor();
   */
  constructor(stack: Stack, props: ApplicationCostMonitoringProps) {
    super(stack, props);

    if (props.monthlyLimitInDollars < 30) {
      throw RangeError(
        "monthlyLimitInDollars must be greater than equal to 30."
      );
    }

    this.applicationName = props.applicationName;
    this.otherStacks = props.otherStacksIncludedInBudget ?? [];
    this.costAllocationTag = props.costAllocationTag;
  }

  protected createDailyBudgets(
    dailyLimit: number,
    subscribers: Array<budgets.CfnBudget.SubscriberProperty>
  ): void {
    new Budget(
      this.stack,
      `application_${this.applicationName}_daily_${dailyLimit}_%80`,
      {
        tags: [{ key: this.applicationTagKey, value: this.applicationName }],
        limit: dailyLimit,
        subscribers: subscribers,
        alertContdition: {
          period: TimeUnit.DAILY,
          threshold: 80,
        },
      }
    ).clone(`application_${this.applicationName}_daily_${dailyLimit}_%100`, {
      alertContdition: { threshold: 100 },
    });
  }

  protected createMonthlyBudgets(
    monthlyLimit: number,
    subscribers: Array<budgets.CfnBudget.SubscriberProperty>
  ): void {
    new Budget(
      this.stack,
      `application_${this.applicationName}_monthly_${monthlyLimit}_%90`,
      {
        tags: [{ key: this.applicationTagKey, value: this.applicationName }],
        limit: monthlyLimit,
        subscribers: subscribers,
        alertContdition: {
          period: TimeUnit.MONTHLY,
          threshold: 90,
        },
      }
    )
      .clone(
        `application_${this.applicationName}_monthly_${monthlyLimit}_%95`,
        { alertContdition: { threshold: 95 } }
      )
      .clone(
        `application_${this.applicationName}_monthly_${monthlyLimit}_%98`,
        { alertContdition: { threshold: 98 } }
      )
      .clone(
        `application_${this.applicationName}_monthly_${monthlyLimit}_%99`,
        { alertContdition: { threshold: 99 } }
      );
  }

  protected createQuarterlyBudgets(
    _quarterlyLimit: number,
    _subscribers: budgets.CfnBudget.SubscriberProperty[]
  ): void {}
  protected createYearlyBudgets(
    _yearlyLimit: number,
    _subscribers: budgets.CfnBudget.SubscriberProperty[]
  ): void {}

  private tagAllStacks(): void {
    [...this.otherStacks, this.stack].forEach((stack) => {
      Tags.of(stack).add(this.applicationTagKey, this.applicationName);
    });
  }

  /**
   * Creates all the alarms, budgets and tags all resources with the application's name.
   */
  public monitor(): void {
    this.tagAllStacks();
    this.createBudgets();
  }

  /**
   * Default key name for application tag.
   */
  protected get applicationTagKey(): string {
    return this.costAllocationTag || "cm:application";
  }
}
