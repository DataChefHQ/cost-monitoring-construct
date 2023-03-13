import { App, Stack, Tags } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { AWSResourceType } from "./resource-types";
import { ApplicationCostMonitoring } from "../src";

describe("An ApplicationCostMonitoring", () => {
  let subject: Template;
  let budgetStrategy: ApplicationCostMonitoring;

  beforeEach(() => {
    const mockApp = new App();
    const mockAppFirstStack = new Stack(mockApp, "mocked-first-stack", {});
    const mockAppSecondStack = new Stack(mockApp, "mocked-second-stack", {});

    budgetStrategy = new ApplicationCostMonitoring(mockAppFirstStack, {
      applicationName: "mock-application",
      monthlyLimitInDollars: 100,
      defaultTopic: "mocked-topic",
      otherStacksIncludedInBudget: [mockAppSecondStack],
      subscribers: ["alert@example.com"],
    });

    jest.spyOn(Tags, "of");
    budgetStrategy.monitor();
    subject = Template.fromStack(mockAppFirstStack);
  });

  it("should throw range error if the monthly budget is less than $30", () => {
    const mockApp = new App();
    const mockAppFirstStack = new Stack(mockApp, "mocked-first-stack", {});

    expect(() => {
      new ApplicationCostMonitoring(mockAppFirstStack, {
        applicationName: "mock-application",
        monthlyLimitInDollars: 29,
        defaultTopic: "mocked-topic",
        subscribers: ["alert@example.com"],
      });
    }).toThrow(RangeError);
  });

  it("should creates multiple aws budgets", () => {
    subject.resourceCountIs(AWSResourceType.Budget, 6);
  });

  it("should creates an sns topic", () => {
    subject.resourceCountIs(AWSResourceType.SNSTopic, 1);
  });

  it("should filter resources with `cm:application` tag key", () => {
    subject.hasResourceProperties(AWSResourceType.Budget, {
      Budget: {
        CostFilters: {
          TagKeyValue: ["user:cm:application$mock-application"],
        },
      },
    });
  });

  it("should tag all stacks", () => {
    expect(Tags.of).toBeCalledTimes(2);
  });

  it("should create daily budgets", () => {
    subject.hasResourceProperties(AWSResourceType.Budget, {
      Budget: {
        TimeUnit: "DAILY",
      },
    });
  });

  it("should create monthly budgets", () => {
    subject.hasResourceProperties(AWSResourceType.Budget, {
      Budget: {
        TimeUnit: "MONTHLY",
      },
    });
  });

  it("should calculates daily budget by rounding down monthly budget/30", () => {
    expect(budgetStrategy.dailyLimit).toEqual(3);
  });

  it("should calculates quarterly budget equal to six months", () => {
    expect(budgetStrategy.quarterlyLimit).toEqual(300);
  });

  it("should calculates yearly budget equal to 365 day", () => {
    expect(budgetStrategy.yearlyLimit).toEqual(1095);
  });
});
