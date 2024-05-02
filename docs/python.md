# Introduction

The Python version of Cost Monitoring Construct derives from the Typescript version, hence refer to [its docs](./typescript.md) for extra details.

To install the Cost Monitoring Construct package, run the following command to download it from PyPI:

```bash
pip install cost-monitoring-construct
```

## Usage

Getting started is very simple: just add the following snippet to your code and adapt it to the situation.

Remember to enable the [cost allocation tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/activating-tags.html), otherwise the budgets won't work!

```python
import aws_cdk as cdk
from cost_monitoring_construct import (
    ApplicationCostMonitoring,
    ApplicationCostMonitoringProps,
)

app = cdk.App()
monitoring_stack = MonitoringStack(app, "MyMonitoringStack")
first_stack = FirstStack(app, "FirstStack")

cost_monitoring = ApplicationCostMonitoring(
    applications_stack,
    props=ApplicationCostMonitoringProps(
        application_name="my-application",
        monthly_limit_in_dollars=200,
        other_stacks_included_in_budget=[first_stack],
        subscribers=["alert@example.com"],
        cost_allocation_tag="MyTag"
    )
)
cost_monitoring.monitor()
```
