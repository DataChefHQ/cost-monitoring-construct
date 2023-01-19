import { IBudgetStrategy } from './budget-strategy';
import { TimeUnit } from './utils';
import { Budget } from './budget';
import { aws_budgets as budgets } from 'aws-cdk-lib';

export class AccountBudgetStrategy extends IBudgetStrategy {
  protected createDailyAlerts(dailyBudget: number, subscribers: Array<budgets.CfnBudget.SubscriberProperty>): void {
    new Budget(this.stack, `account_daily_${dailyBudget}_%80_alert`, {
      limit: dailyBudget,
      subscribers: subscribers,
      alertContdition: {
        threshold: 80,
        period: TimeUnit.DAILY,
      },
    })
      .clone(`account_daily_${dailyBudget}_%100_alert`, { alertContdition: { threshold: 100 } })
  }

  protected createMonthlyAlerts(monthlyBudget: number, subscribers: Array<budgets.CfnBudget.SubscriberProperty>): void {
    new Budget(this.stack, `account_monthly_${monthlyBudget}`, {
      limit: monthlyBudget,
      subscribers: subscribers,
      alertContdition: {
        period: TimeUnit.MONTHLY,
        threshold: 100,
      },
    })
      .clone(`account_monthly_${monthlyBudget * 2}`, { limit: monthlyBudget * 2 })
      .clone(`account_monthly_${monthlyBudget * 3}`, { limit: monthlyBudget * 3 })
      .clone(`account_monthly_${monthlyBudget * 4}`, { limit: monthlyBudget * 4 })
      .clone(`account_monthly_${monthlyBudget * 10}`, { limit: monthlyBudget * 10 })
  }
}
