# Introduction

> [!NOTE]
> The following is valid as of 2024-03-18. Future versions of `jsii` might provide a more Pythonic approach.

Using the python version of this package requires some extra steps to ensure everything works as expected.

This document highlights only those steps, so for the basics, please refer to the [main README](../README.md), the [API docs](../API.md) and the [Typescript docs](typescript.md).

## How to implement `IApplicationCostMonitoringProps` (or any other IInterface with `jsii`)

Since this package is written in Typescript and then exported to Python via `jsii`, using interfaces to pass props is not as straightforward as it should be.

Whereas in Typescript you can simply pass the props like this:

```ts
const costMonitoring = new ApplicationCostMonitoring(
    monitoringStack,
    // ⬇︎⬇︎⬇︎ The props ⬇︎⬇︎⬇︎
    {
        applicationName: "my-application",
        monthlyBudget: 200,want)
        otherStacksIncludedInBudget: [secondStack, firstStack],
        subscribers: ["alert@example.com"],
    }
);
```

In python it is not so simple.

The correct, and ONLY working approach is to:

1. Create a new class (no inheritance)
2. Decorate it with `@jsii.implements(<IMyInterface>)`
3. Use getters and setters to define properties

Example:

```py
import jsii

from cost_monitoring_construct import IApplicationCostMonitoringProps

@jsii.implements(IApplicationCostMonitoringProps)
class CostMonitoringProps:
    def __init__(self, props: dict[str, Any]) -> None:
        self.props = props


    @property
    def application_name(self):
        return self.props["application_name"]

    @application_name.setter
    def application_name(self, value: str):
        self.props["application_name"] = value

    @property
    def default_topic(self):
        return self.props.get("default_topic")

    @default_topic.setter
    def default_topic(self, value: str | None):
        self.props["default_topic"] = value

    # etc...
```

Later you can use this class directly in the `ApplicationCostMonitoring`:

```py
cost_monitoring = ApplicationCostMonitoring(
    stack_to_monitor,
    props=CostMonitoringProps(
        {
            "application_name": "my_app",
            "monthly_limit_in_dollars": 100,
            "subscribers": ["me@myself.com"]
        }
    )
)
```

## Sources and additional info

- <https://aws.github.io/jsii/user-guides/lib-user/language-specific/python/>
- <https://github.com/aws/jsii/issues/1027>
