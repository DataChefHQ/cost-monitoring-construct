import { IBudgetStrategy } from './budget-strategy';
import { TimeUnit } from './utils';
import { Budget } from './budget';
import { aws_budgets as budgets } from 'aws-cdk-lib';

export class AccountCostMonitoring extends IBudgetStrategy {
  protected createDailyBudgets(dailyLimit: number, subscribers: Array<budgets.CfnBudget.SubscriberProperty>): void {
    new Budget(this.stack, `account_daily_${dailyLimit}_%80_alert`, {
      limit: dailyLimit,
      subscribers: subscribers,
      alertContdition: {
        threshold: 80,
        period: TimeUnit.DAILY,
      },
    })
      .clone(`account_daily_${dailyLimit}_%100_alert`, { alertContdition: { threshold: 100 } })
  }

  protected createMonthlyBudgets(monthlyLimit: number, subscribers: Array<budgets.CfnBudget.SubscriberProperty>): void {
    new Budget(this.stack, `account_monthly_${monthlyLimit}`, {
      limit: monthlyLimit,
      subscribers: subscribers,
      alertContdition: {
        period: TimeUnit.MONTHLY,
        threshold: 100,
      },
    })
      .clone(`account_monthly_${monthlyLimit * 2}`, { limit: monthlyLimit * 2 })
      .clone(`account_monthly_${monthlyLimit * 3}`, { limit: monthlyLimit * 3 })
      .clone(`account_monthly_${monthlyLimit * 4}`, { limit: monthlyLimit * 4 })
      .clone(`account_monthly_${monthlyLimit * 10}`, { limit: monthlyLimit * 10 })
  }
}
