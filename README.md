# Introduction
BudgetMonitoring is a typescript CDK construct that helps track applications' costs separately and receive alerts in case of unpredicted resource usage to prevent surprise billings and have a better overview of resource usage by an application.

# Usage
The easiest way to apply budget monitoring is by using predefined default budget strategies. The `ApplicationBudgetStrategy` has default strategy implementation for monitoring budgets per CDK applications, while the `AccountBudgetStrategy` has default strategy implementation for monitoring budgets per account. You can also create your own strategy by creating a class that applies to the `IBudgetStrategy` or directly inherits from the `ApplicationBudgetStrategy` or `AccountBudgetStrategy` class to customize them to your needs.

## `ApplicationBudgetStrategy` Class
This is the default strategy for monitoring CDK applications. You have to provide at least one stack by the first parameter of the initializer. If you wish to monitor more stacks, you can pass them as a list to the `otherStacksIncludedInBudget` prop. 

The `ApplicationBudgetStrategy` will always use the first stack (the first parameter of the initializer) to inject its resources into it. You can create a separate stack and pass it as the first stack if you wish to keep budget monitoring separate from your stacks. The budget monitoring class will monitor both the first stack and stacks from `otherStacksIncludedInBudget`.

⚠️ **Important Note**: ApplicationBudgetStrategy uses AWS Tags to track resources' usages. You must activate the `bm:application` tag key under Cost Allocation Tags. The tag key will appear in the AWS console up to 24 hours after at least one AWS resource has been created with that tag.

The example below shows how to use `ApplicationBudgetStrategy` to track your application in CDK code:
```typescript
const app = new cdk.App();
// Holding resources for monitoring the application. Plus to be used by budgetStrategy to inject its resources into it.
const monitoringStack = new MonitoringStack(app, 'MyAppMonitoringStack', {});
const firstStack = new FirstStack(app, 'FirstStack', {});
const secondStack = new SecondStack(app, 'SecondStack', {});
const budgetStratgy = new ApplicationBudgetStrategy(monitoringStack, {
  //                                the fitst stack ~~~~~~~^~~~~~~
   applicationName: 'my-application',
   monthlyBudget: 200,
  // Optional (you can add as many stack as you want)
   otherStacksIncludedInBudget: [
       secondStack,
       firstStack
   ],
   subscribers: [
     'internal-service-notif-aaaaht4ubhydfc344peefwt6ye@datachef-engineering.slack.com',
     'alert@example.com',
   ]
});
```

## `IBudgetStrategy` Abstract Class
This is the abstract base class that all budget strategies must apply to. This Abstract class enforces the implementation for `createDailyAlerts` and `createMonthlyAlerts`. Plus, it provides the `createQuarterlyAlerts` and `createYearlyAlerts` optional to implement.

The methods above abstract the implementations of budgeting strategy from boilerplate codes.

To implement those methods, you can instantiate from class `Budget` to define your budgets according to their period. The class `Budget` provides the `clone` method to deep copy objects with small changes instead of providing duplicate configs for multiple `Budget` instantiations.

The example below implements the `createDailyAlerts` method with that pattern for a custom budget strategy
```typescript
export class MyApplicationBudgetStrategy extends IBudgetStrategy {
  protected createDailyAlerts(dailyBudget: number, subscribers: Array<budgets.CfnBudget.SubscriberProperty>): void {
    new Budget(this.stack, `application_${this.applicationName}_daily_${dailyBudget}_%80`, {
      tags: [
        { key: 'application', value: 'my-application' },
      ],
      limit: dailyBudget,
      subscribers: subscribers,
      alertContdition: {
        threshold: 80,
        period: TimeUnit.DAILY,
      },
    })
      .clone(`application_${this.applicationName}_daily_${dailyBudget}_%90`, { threshold: 90 })
      .clone(`application_${this.applicationName}_daily_${dailyBudget}_%100`, { threshold: 100 })
  }

 protected createMonthlyAlerts(monthlyBudget: number, subscribers: Array<budgets.CfnBudget.SubscriberProperty>): void {
  // defining monthly strategy here ...
 }

 // optionally you can define Yearly and Quarterly alerts as well.
}
```
