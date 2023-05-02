#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CostMonitoringSampleStack } from "../lib/cost-monitoring-sample-stack";
import { ApplicationCostMonitoring } from "cost-monitoring-construct";

const app = new cdk.App();
const sampleStack = new CostMonitoringSampleStack(
  app,
  "CostMonitoringSampleStack",
  {}
);

const costMonitoring = new ApplicationCostMonitoring(sampleStack, {
  applicationName: "mock-application",
  monthlyLimitInDollars: 100,
  defaultTopic: "mocked-topic",
  subscribers: ["alert@example.com"],
});

costMonitoring.monitor();
