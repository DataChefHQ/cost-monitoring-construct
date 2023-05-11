import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { aws_s3 as S3 } from "aws-cdk-lib";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CostMonitoringSampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new S3.Bucket(this, "some-bucket", {
      bucketName: "some-bucketname029384092",
      autoDeleteObjects: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
  }
}
