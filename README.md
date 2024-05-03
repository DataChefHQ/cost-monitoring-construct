# What is Cost Monitoring Construct?

Cost Monitoring Construct is a CDK library that helps monitor costs for AWS cloud infrastructure resources, such as virtual machines, storage, and network traffic. It allows you to set budgets and alerts to ensure that you don't overspend on your cloud resources.

With the Cost Monitoring Construct, you can share the responsibility of cost management between developers and business holders. This is achieved through the creation of meaningful reports that enable the business team to make informed decisions. Additionally, the Construct generates boilerplate code that can be used to apply these decisions in practice, making it easier to stay on top of your budget.

## How to use Cost Monitoring Construct?

To use Cost Monitoring Construct, all you need is to have the AWS CDK installed and set up. Once you have that, you can install the package from the repository of your choice.

For more information on using this Construct in TypeScript checkout the [TypeScript documentation](docs/typescript.md). You can also check the typescript example from [sample folder](https://github.com/DataChefHQ/cost-monitoring-construct/tree/main/sample) on the GitHub repository.

## Why do you need it?

Cloud services can get very expensive, very quickly, especially if you are not careful with your usage. Cost Monitoring Construct helps you to keep an eye on your cloud infrastructure costs so that you can stay within budget. By setting budgets and defining alert strategies, you can take proactive steps to reduce costs before they become a problem.

## How does Cost Monitoring Construct work?

Cost Monitoring Construct uses AWS Tagging practice to track resources related to an specific application, creates proper alert with respect to the defined budget limit and provide overview dashbords. The tool is highly customizable and allows you to customize it to your budgeting strategy based on your specific needs.

Cost Monitoring Construct provides the following features:

- **Cost dashboard:** Displays your current costs and usage, broken down by application's name, region, and etc. Allows you to see how much you are spending on each application and where you might be able to reduce costs.
- **Budgets:** Allows you to set budgets for each applications. It will automatically set up alerts to notify you when your actual costs exceed your budgeted costs. It also continues to track the cost and sending alert if an application continues to cost drastically.
- **Integration:** Integrates with various tools and monitoring services, such as AWS Cost Explorer and Datadog.

> [!WARNING]
> ApplicationCostMonitoring uses AWS Tags to track resources' usages. You must [activate](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/activating-tags.html) your chosen tag key (`cm:application` by default) under Cost Allocation Tags. The tag key will appear in the AWS console up to 24 hours after at least one AWS resource has been created with that tag.

## What is it useful for?

Cost Monitoring Construct is useful for anyone who uses AWS and wants to keep their costs under control. It is particularly useful for:

- **Startups and small businesses:** Cost Monitoring Construct can help startups and small businesses to keep their costs under control during the early stages of growth.
- **Large enterprises:** Cost Monitoring Construct can help large enterprises to optimize their cloud usage and reduce costs across multiple teams and departments.
- **Developers:** Cost Monitoring Construct can help developers to track their usage and costs across multiple projects and services.

## What is this _not_ useful for?

The Cost Monitoring Construct is not a magical tool that can solve all of your cloud cost problems. In spite of the fact that it can bring clarity and help you to identify areas where you can reduce costs, you must make the necessary decisions about your infrastructure on your own.

## Which programming languages Cost Monitoring Construct supports?

Cost Monitoring Construct has been developed using JSII technolgy to provide interfaces for different modern programming languages. Currently, it supports the following languages:

- [TypeScript](https://www.npmjs.com/package/cost-monitoring-construct)
- [JavaScript](https://www.npmjs.com/package/cost-monitoring-construct)
- [Python](https://pypi.org/project/cost-monitoring-construct/)
- [.NET](https://www.nuget.org/packages/DataChef.CostMonitoringConstruct)
- [Java](https://central.sonatype.com/artifact/co.datachef/costmonitoringconstruct/1.1.0/versions)

> [!NOTE]
> Go will be supported soon but for now you can build it from the source.

If you have any questions or need help with Cost Monitoring Construct, you can reach out to our support team at [support@datachef.co](mailto:support@datachef.co).
