import { ApplicationBudgetStrategy } from '../src';
import { App, Stack, Tags } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { AWSResourceType } from './resource-types';

describe('An ApplicationBudgetStrategy', () => {
    let subject: Template;
    let budgetStrategy: ApplicationBudgetStrategy;

    beforeAll(() => {
        const mockApp = new App();
        const mockAppFirstStack = new Stack(mockApp, 'mocked-first-stack', {});
        const mockAppSecondStack = new Stack(mockApp, 'mocked-second-stack', {});

        budgetStrategy = new ApplicationBudgetStrategy(mockAppFirstStack, {
            applicationName: 'mock-application',
            monthlyBudgetInDollars: 100,
            defaultTopic: 'mocked-topic',
            otherStacksIncludedInBudget: [
                mockAppSecondStack,
            ],
            subscribers: [
                'kiarash.kiani@datachef.nl',
                'kiarash@kiani.info',
            ]
        });

        jest.spyOn(Tags, 'of');
        budgetStrategy.createBudgets();
        subject = Template.fromStack(mockAppFirstStack);
    });

    it('should creates multiple aws budgets', () => {
        subject.resourceCountIs(AWSResourceType.Budget, 6);
    });

    it('should creates an sns topic', () => {
        subject.resourceCountIs(AWSResourceType.SNSTopic, 1);
    });

    it('should filter resources with `bm:application` tag key', () => {
        subject.hasResourceProperties(AWSResourceType.Budget, {
            "Budget": {
                "CostFilters": {
                    "TagKeyValue": [
                        "user:bm:application$mock-application"
                    ]
                },
            },
        });
    });

    it('should tag all stacks', () => {
        expect(Tags.of).toBeCalledTimes(2);
    });

    it('should create daily budgets', () => {
        subject.hasResourceProperties(AWSResourceType.Budget, {
            "Budget": {
                "TimeUnit": "DAILY"
            },
        })
    });

    it('should create monthly budgets', () => {
        subject.hasResourceProperties(AWSResourceType.Budget, {
            "Budget": {
                "TimeUnit": "MONTHLY"
            },
        })
    });

    it('should calculates daily budget by rounding down monthly budget/30', () => {
        expect(budgetStrategy.dailyBudget).toEqual(3);
    });

    it('should calculates quarterly budget equal to six months', () => {
        expect(budgetStrategy.quarterlyBudget).toEqual(300);
    });

    it('should calculates yearly budget equal to 365 day', () => {
        expect(budgetStrategy.yearlyBudget).toEqual(1095);
    });

})
