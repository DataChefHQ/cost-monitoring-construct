# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Budget <a name="Budget" id="cost-monitoring-construct.Budget"></a>

#### Initializers <a name="Initializers" id="cost-monitoring-construct.Budget.Initializer"></a>

```typescript
import { Budget } from 'cost-monitoring-construct'

new Budget(scope: Construct, id: string, props: IBudgetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cost-monitoring-construct.Budget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cost-monitoring-construct.Budget.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cost-monitoring-construct.Budget.Initializer.parameter.props">props</a></code> | <code><a href="#cost-monitoring-construct.IBudgetProps">IBudgetProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cost-monitoring-construct.Budget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cost-monitoring-construct.Budget.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cost-monitoring-construct.Budget.Initializer.parameter.props"></a>

- *Type:* <a href="#cost-monitoring-construct.IBudgetProps">IBudgetProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cost-monitoring-construct.Budget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cost-monitoring-construct.Budget.clone">clone</a></code> | create a copy of the object with the provided changes. |

---

##### `toString` <a name="toString" id="cost-monitoring-construct.Budget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `clone` <a name="clone" id="cost-monitoring-construct.Budget.clone"></a>

```typescript
public clone(id: string, props: IOptionalBudgetProps): Budget
```

create a copy of the object with the provided changes.

###### `id`<sup>Required</sup> <a name="id" id="cost-monitoring-construct.Budget.clone.parameter.id"></a>

- *Type:* string

a unique CDK Construct identifier.

---

###### `props`<sup>Required</sup> <a name="props" id="cost-monitoring-construct.Budget.clone.parameter.props"></a>

- *Type:* <a href="#cost-monitoring-construct.IOptionalBudgetProps">IOptionalBudgetProps</a>

you can choose to optionally pass all the initializer parameters of this class as the changes you wish to have on the cloned object.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cost-monitoring-construct.Budget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cost-monitoring-construct.Budget.isConstruct"></a>

```typescript
import { Budget } from 'cost-monitoring-construct'

Budget.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cost-monitoring-construct.Budget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cost-monitoring-construct.Budget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cost-monitoring-construct.Budget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---



## Classes <a name="Classes" id="Classes"></a>

### AccountCostMonitoring <a name="AccountCostMonitoring" id="cost-monitoring-construct.AccountCostMonitoring"></a>

#### Initializers <a name="Initializers" id="cost-monitoring-construct.AccountCostMonitoring.Initializer"></a>

```typescript
import { AccountCostMonitoring } from 'cost-monitoring-construct'

new AccountCostMonitoring(construct: Stack, props: IBudgetStrategyProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cost-monitoring-construct.AccountCostMonitoring.Initializer.parameter.construct">construct</a></code> | <code>aws-cdk-lib.Stack</code> | - use to define it's resources inside it. |
| <code><a href="#cost-monitoring-construct.AccountCostMonitoring.Initializer.parameter.props">props</a></code> | <code><a href="#cost-monitoring-construct.IBudgetStrategyProps">IBudgetStrategyProps</a></code> | *No description.* |

---

##### `construct`<sup>Required</sup> <a name="construct" id="cost-monitoring-construct.AccountCostMonitoring.Initializer.parameter.construct"></a>

- *Type:* aws-cdk-lib.Stack

use to define it's resources inside it.

---

##### `props`<sup>Required</sup> <a name="props" id="cost-monitoring-construct.AccountCostMonitoring.Initializer.parameter.props"></a>

- *Type:* <a href="#cost-monitoring-construct.IBudgetStrategyProps">IBudgetStrategyProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cost-monitoring-construct.AccountCostMonitoring.createBudgets">createBudgets</a></code> | creates all the daily, monthly, quaryerly, and yearly budgets based on the implementation of the related methods. |

---

##### `createBudgets` <a name="createBudgets" id="cost-monitoring-construct.AccountCostMonitoring.createBudgets"></a>

```typescript
public createBudgets(): void
```

creates all the daily, monthly, quaryerly, and yearly budgets based on the implementation of the related methods.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cost-monitoring-construct.AccountCostMonitoring.property.dailyLimit">dailyLimit</a></code> | <code>number</code> | calculates daily limit based on the provided monthly limit. |
| <code><a href="#cost-monitoring-construct.AccountCostMonitoring.property.monthlyLimit">monthlyLimit</a></code> | <code>number</code> | returns montly limit. |
| <code><a href="#cost-monitoring-construct.AccountCostMonitoring.property.quarterlyLimit">quarterlyLimit</a></code> | <code>number</code> | calculates quarterly limit based on the provided monthly limit. |
| <code><a href="#cost-monitoring-construct.AccountCostMonitoring.property.yearlyLimit">yearlyLimit</a></code> | <code>number</code> | calculates yearly limit based on the provided daily budget. |
| <code><a href="#cost-monitoring-construct.AccountCostMonitoring.property.defaultTopic">defaultTopic</a></code> | <code>aws-cdk-lib.aws_sns.Topic</code> | Return default SNS topic only if the defultTopic prop has been passed when instantiating. |

---

##### `dailyLimit`<sup>Required</sup> <a name="dailyLimit" id="cost-monitoring-construct.AccountCostMonitoring.property.dailyLimit"></a>

```typescript
public readonly dailyLimit: number;
```

- *Type:* number

calculates daily limit based on the provided monthly limit.

---

##### `monthlyLimit`<sup>Required</sup> <a name="monthlyLimit" id="cost-monitoring-construct.AccountCostMonitoring.property.monthlyLimit"></a>

```typescript
public readonly monthlyLimit: number;
```

- *Type:* number

returns montly limit.

---

##### `quarterlyLimit`<sup>Required</sup> <a name="quarterlyLimit" id="cost-monitoring-construct.AccountCostMonitoring.property.quarterlyLimit"></a>

```typescript
public readonly quarterlyLimit: number;
```

- *Type:* number

calculates quarterly limit based on the provided monthly limit.

---

##### `yearlyLimit`<sup>Required</sup> <a name="yearlyLimit" id="cost-monitoring-construct.AccountCostMonitoring.property.yearlyLimit"></a>

```typescript
public readonly yearlyLimit: number;
```

- *Type:* number

calculates yearly limit based on the provided daily budget.

---

##### `defaultTopic`<sup>Optional</sup> <a name="defaultTopic" id="cost-monitoring-construct.AccountCostMonitoring.property.defaultTopic"></a>

```typescript
public readonly defaultTopic: Topic;
```

- *Type:* aws-cdk-lib.aws_sns.Topic

Return default SNS topic only if the defultTopic prop has been passed when instantiating.

---


### ApplicationCostMonitoring <a name="ApplicationCostMonitoring" id="cost-monitoring-construct.ApplicationCostMonitoring"></a>

#### Initializers <a name="Initializers" id="cost-monitoring-construct.ApplicationCostMonitoring.Initializer"></a>

```typescript
import { ApplicationCostMonitoring } from 'cost-monitoring-construct'

new ApplicationCostMonitoring(stack: Stack, props: IApplicationCostMonitoringProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cost-monitoring-construct.ApplicationCostMonitoring.Initializer.parameter.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | - default stack to track its resources and it will be used to define Budget resources in it. |
| <code><a href="#cost-monitoring-construct.ApplicationCostMonitoring.Initializer.parameter.props">props</a></code> | <code><a href="#cost-monitoring-construct.IApplicationCostMonitoringProps">IApplicationCostMonitoringProps</a></code> | *No description.* |

---

##### `stack`<sup>Required</sup> <a name="stack" id="cost-monitoring-construct.ApplicationCostMonitoring.Initializer.parameter.stack"></a>

- *Type:* aws-cdk-lib.Stack

default stack to track its resources and it will be used to define Budget resources in it.

---

##### `props`<sup>Required</sup> <a name="props" id="cost-monitoring-construct.ApplicationCostMonitoring.Initializer.parameter.props"></a>

- *Type:* <a href="#cost-monitoring-construct.IApplicationCostMonitoringProps">IApplicationCostMonitoringProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cost-monitoring-construct.ApplicationCostMonitoring.createBudgets">createBudgets</a></code> | creates all the daily, monthly, quaryerly, and yearly budgets based on the implementation of the related methods. |
| <code><a href="#cost-monitoring-construct.ApplicationCostMonitoring.monitor">monitor</a></code> | Creates all the alarms, budgets and tags all resources with the application's name. |

---

##### `createBudgets` <a name="createBudgets" id="cost-monitoring-construct.ApplicationCostMonitoring.createBudgets"></a>

```typescript
public createBudgets(): void
```

creates all the daily, monthly, quaryerly, and yearly budgets based on the implementation of the related methods.

##### `monitor` <a name="monitor" id="cost-monitoring-construct.ApplicationCostMonitoring.monitor"></a>

```typescript
public monitor(): void
```

Creates all the alarms, budgets and tags all resources with the application's name.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cost-monitoring-construct.ApplicationCostMonitoring.property.dailyLimit">dailyLimit</a></code> | <code>number</code> | calculates daily limit based on the provided monthly limit. |
| <code><a href="#cost-monitoring-construct.ApplicationCostMonitoring.property.monthlyLimit">monthlyLimit</a></code> | <code>number</code> | returns montly limit. |
| <code><a href="#cost-monitoring-construct.ApplicationCostMonitoring.property.quarterlyLimit">quarterlyLimit</a></code> | <code>number</code> | calculates quarterly limit based on the provided monthly limit. |
| <code><a href="#cost-monitoring-construct.ApplicationCostMonitoring.property.yearlyLimit">yearlyLimit</a></code> | <code>number</code> | calculates yearly limit based on the provided daily budget. |
| <code><a href="#cost-monitoring-construct.ApplicationCostMonitoring.property.defaultTopic">defaultTopic</a></code> | <code>aws-cdk-lib.aws_sns.Topic</code> | Return default SNS topic only if the defultTopic prop has been passed when instantiating. |
| <code><a href="#cost-monitoring-construct.ApplicationCostMonitoring.property.applicationName">applicationName</a></code> | <code>string</code> | *No description.* |

---

##### `dailyLimit`<sup>Required</sup> <a name="dailyLimit" id="cost-monitoring-construct.ApplicationCostMonitoring.property.dailyLimit"></a>

```typescript
public readonly dailyLimit: number;
```

- *Type:* number

calculates daily limit based on the provided monthly limit.

---

##### `monthlyLimit`<sup>Required</sup> <a name="monthlyLimit" id="cost-monitoring-construct.ApplicationCostMonitoring.property.monthlyLimit"></a>

```typescript
public readonly monthlyLimit: number;
```

- *Type:* number

returns montly limit.

---

##### `quarterlyLimit`<sup>Required</sup> <a name="quarterlyLimit" id="cost-monitoring-construct.ApplicationCostMonitoring.property.quarterlyLimit"></a>

```typescript
public readonly quarterlyLimit: number;
```

- *Type:* number

calculates quarterly limit based on the provided monthly limit.

---

##### `yearlyLimit`<sup>Required</sup> <a name="yearlyLimit" id="cost-monitoring-construct.ApplicationCostMonitoring.property.yearlyLimit"></a>

```typescript
public readonly yearlyLimit: number;
```

- *Type:* number

calculates yearly limit based on the provided daily budget.

---

##### `defaultTopic`<sup>Optional</sup> <a name="defaultTopic" id="cost-monitoring-construct.ApplicationCostMonitoring.property.defaultTopic"></a>

```typescript
public readonly defaultTopic: Topic;
```

- *Type:* aws-cdk-lib.aws_sns.Topic

Return default SNS topic only if the defultTopic prop has been passed when instantiating.

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="cost-monitoring-construct.ApplicationCostMonitoring.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

---


### IBudgetStrategy <a name="IBudgetStrategy" id="cost-monitoring-construct.IBudgetStrategy"></a>

#### Initializers <a name="Initializers" id="cost-monitoring-construct.IBudgetStrategy.Initializer"></a>

```typescript
import { IBudgetStrategy } from 'cost-monitoring-construct'

new IBudgetStrategy(construct: Stack, props: IBudgetStrategyProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cost-monitoring-construct.IBudgetStrategy.Initializer.parameter.construct">construct</a></code> | <code>aws-cdk-lib.Stack</code> | - use to define it's resources inside it. |
| <code><a href="#cost-monitoring-construct.IBudgetStrategy.Initializer.parameter.props">props</a></code> | <code><a href="#cost-monitoring-construct.IBudgetStrategyProps">IBudgetStrategyProps</a></code> | *No description.* |

---

##### `construct`<sup>Required</sup> <a name="construct" id="cost-monitoring-construct.IBudgetStrategy.Initializer.parameter.construct"></a>

- *Type:* aws-cdk-lib.Stack

use to define it's resources inside it.

---

##### `props`<sup>Required</sup> <a name="props" id="cost-monitoring-construct.IBudgetStrategy.Initializer.parameter.props"></a>

- *Type:* <a href="#cost-monitoring-construct.IBudgetStrategyProps">IBudgetStrategyProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cost-monitoring-construct.IBudgetStrategy.createBudgets">createBudgets</a></code> | creates all the daily, monthly, quaryerly, and yearly budgets based on the implementation of the related methods. |

---

##### `createBudgets` <a name="createBudgets" id="cost-monitoring-construct.IBudgetStrategy.createBudgets"></a>

```typescript
public createBudgets(): void
```

creates all the daily, monthly, quaryerly, and yearly budgets based on the implementation of the related methods.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cost-monitoring-construct.IBudgetStrategy.property.dailyLimit">dailyLimit</a></code> | <code>number</code> | calculates daily limit based on the provided monthly limit. |
| <code><a href="#cost-monitoring-construct.IBudgetStrategy.property.monthlyLimit">monthlyLimit</a></code> | <code>number</code> | returns montly limit. |
| <code><a href="#cost-monitoring-construct.IBudgetStrategy.property.quarterlyLimit">quarterlyLimit</a></code> | <code>number</code> | calculates quarterly limit based on the provided monthly limit. |
| <code><a href="#cost-monitoring-construct.IBudgetStrategy.property.yearlyLimit">yearlyLimit</a></code> | <code>number</code> | calculates yearly limit based on the provided daily budget. |
| <code><a href="#cost-monitoring-construct.IBudgetStrategy.property.defaultTopic">defaultTopic</a></code> | <code>aws-cdk-lib.aws_sns.Topic</code> | Return default SNS topic only if the defultTopic prop has been passed when instantiating. |

---

##### `dailyLimit`<sup>Required</sup> <a name="dailyLimit" id="cost-monitoring-construct.IBudgetStrategy.property.dailyLimit"></a>

```typescript
public readonly dailyLimit: number;
```

- *Type:* number

calculates daily limit based on the provided monthly limit.

---

##### `monthlyLimit`<sup>Required</sup> <a name="monthlyLimit" id="cost-monitoring-construct.IBudgetStrategy.property.monthlyLimit"></a>

```typescript
public readonly monthlyLimit: number;
```

- *Type:* number

returns montly limit.

---

##### `quarterlyLimit`<sup>Required</sup> <a name="quarterlyLimit" id="cost-monitoring-construct.IBudgetStrategy.property.quarterlyLimit"></a>

```typescript
public readonly quarterlyLimit: number;
```

- *Type:* number

calculates quarterly limit based on the provided monthly limit.

---

##### `yearlyLimit`<sup>Required</sup> <a name="yearlyLimit" id="cost-monitoring-construct.IBudgetStrategy.property.yearlyLimit"></a>

```typescript
public readonly yearlyLimit: number;
```

- *Type:* number

calculates yearly limit based on the provided daily budget.

---

##### `defaultTopic`<sup>Optional</sup> <a name="defaultTopic" id="cost-monitoring-construct.IBudgetStrategy.property.defaultTopic"></a>

```typescript
public readonly defaultTopic: Topic;
```

- *Type:* aws-cdk-lib.aws_sns.Topic

Return default SNS topic only if the defultTopic prop has been passed when instantiating.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IApplicationCostMonitoringProps <a name="IApplicationCostMonitoringProps" id="cost-monitoring-construct.IApplicationCostMonitoringProps"></a>

- *Extends:* <a href="#cost-monitoring-construct.IBudgetStrategyProps">IBudgetStrategyProps</a>

- *Implemented By:* <a href="#cost-monitoring-construct.IApplicationCostMonitoringProps">IApplicationCostMonitoringProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cost-monitoring-construct.IApplicationCostMonitoringProps.property.monthlyLimitInDollars">monthlyLimitInDollars</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cost-monitoring-construct.IApplicationCostMonitoringProps.property.defaultTopic">defaultTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cost-monitoring-construct.IApplicationCostMonitoringProps.property.subscribers">subscribers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cost-monitoring-construct.IApplicationCostMonitoringProps.property.applicationName">applicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cost-monitoring-construct.IApplicationCostMonitoringProps.property.otherStacksIncludedInBudget">otherStacksIncludedInBudget</a></code> | <code>aws-cdk-lib.Stack[]</code> | *No description.* |

---

##### `monthlyLimitInDollars`<sup>Required</sup> <a name="monthlyLimitInDollars" id="cost-monitoring-construct.IApplicationCostMonitoringProps.property.monthlyLimitInDollars"></a>

```typescript
public readonly monthlyLimitInDollars: number;
```

- *Type:* number

---

##### `defaultTopic`<sup>Optional</sup> <a name="defaultTopic" id="cost-monitoring-construct.IApplicationCostMonitoringProps.property.defaultTopic"></a>

```typescript
public readonly defaultTopic: string;
```

- *Type:* string

---

##### `subscribers`<sup>Optional</sup> <a name="subscribers" id="cost-monitoring-construct.IApplicationCostMonitoringProps.property.subscribers"></a>

```typescript
public readonly subscribers: string[];
```

- *Type:* string[]

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="cost-monitoring-construct.IApplicationCostMonitoringProps.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

---

##### `otherStacksIncludedInBudget`<sup>Optional</sup> <a name="otherStacksIncludedInBudget" id="cost-monitoring-construct.IApplicationCostMonitoringProps.property.otherStacksIncludedInBudget"></a>

```typescript
public readonly otherStacksIncludedInBudget: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

---

### IBudgetAlertCondition <a name="IBudgetAlertCondition" id="cost-monitoring-construct.IBudgetAlertCondition"></a>

- *Implemented By:* <a href="#cost-monitoring-construct.IBudgetAlertCondition">IBudgetAlertCondition</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cost-monitoring-construct.IBudgetAlertCondition.property.period">period</a></code> | <code><a href="#cost-monitoring-construct.TimeUnit">TimeUnit</a></code> | *No description.* |
| <code><a href="#cost-monitoring-construct.IBudgetAlertCondition.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cost-monitoring-construct.IBudgetAlertCondition.property.comparisonOperator">comparisonOperator</a></code> | <code><a href="#cost-monitoring-construct.ComparisonOperator">ComparisonOperator</a></code> | *No description.* |
| <code><a href="#cost-monitoring-construct.IBudgetAlertCondition.property.notificationType">notificationType</a></code> | <code><a href="#cost-monitoring-construct.NotificationType">NotificationType</a></code> | *No description.* |
| <code><a href="#cost-monitoring-construct.IBudgetAlertCondition.property.thresholdType">thresholdType</a></code> | <code><a href="#cost-monitoring-construct.ThresholdType">ThresholdType</a></code> | *No description.* |

---

##### `period`<sup>Required</sup> <a name="period" id="cost-monitoring-construct.IBudgetAlertCondition.property.period"></a>

```typescript
public readonly period: TimeUnit;
```

- *Type:* <a href="#cost-monitoring-construct.TimeUnit">TimeUnit</a>

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="cost-monitoring-construct.IBudgetAlertCondition.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `comparisonOperator`<sup>Optional</sup> <a name="comparisonOperator" id="cost-monitoring-construct.IBudgetAlertCondition.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: ComparisonOperator;
```

- *Type:* <a href="#cost-monitoring-construct.ComparisonOperator">ComparisonOperator</a>

---

##### `notificationType`<sup>Optional</sup> <a name="notificationType" id="cost-monitoring-construct.IBudgetAlertCondition.property.notificationType"></a>

```typescript
public readonly notificationType: NotificationType;
```

- *Type:* <a href="#cost-monitoring-construct.NotificationType">NotificationType</a>

---

##### `thresholdType`<sup>Optional</sup> <a name="thresholdType" id="cost-monitoring-construct.IBudgetAlertCondition.property.thresholdType"></a>

```typescript
public readonly thresholdType: ThresholdType;
```

- *Type:* <a href="#cost-monitoring-construct.ThresholdType">ThresholdType</a>

---

### IBudgetProps <a name="IBudgetProps" id="cost-monitoring-construct.IBudgetProps"></a>

- *Implemented By:* <a href="#cost-monitoring-construct.IBudgetProps">IBudgetProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cost-monitoring-construct.IBudgetProps.property.alertContdition">alertContdition</a></code> | <code><a href="#cost-monitoring-construct.IBudgetAlertCondition">IBudgetAlertCondition</a></code> | *No description.* |
| <code><a href="#cost-monitoring-construct.IBudgetProps.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cost-monitoring-construct.IBudgetProps.property.subscribers">subscribers</a></code> | <code>aws-cdk-lib.aws_budgets.CfnBudget.SubscriberProperty[]</code> | *No description.* |
| <code><a href="#cost-monitoring-construct.IBudgetProps.property.tags">tags</a></code> | <code><a href="#cost-monitoring-construct.ITag">ITag</a>[]</code> | *No description.* |

---

##### `alertContdition`<sup>Required</sup> <a name="alertContdition" id="cost-monitoring-construct.IBudgetProps.property.alertContdition"></a>

```typescript
public readonly alertContdition: IBudgetAlertCondition;
```

- *Type:* <a href="#cost-monitoring-construct.IBudgetAlertCondition">IBudgetAlertCondition</a>

---

##### `limit`<sup>Required</sup> <a name="limit" id="cost-monitoring-construct.IBudgetProps.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `subscribers`<sup>Required</sup> <a name="subscribers" id="cost-monitoring-construct.IBudgetProps.property.subscribers"></a>

```typescript
public readonly subscribers: SubscriberProperty[];
```

- *Type:* aws-cdk-lib.aws_budgets.CfnBudget.SubscriberProperty[]

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cost-monitoring-construct.IBudgetProps.property.tags"></a>

```typescript
public readonly tags: ITag[];
```

- *Type:* <a href="#cost-monitoring-construct.ITag">ITag</a>[]

---

### IBudgetStrategyProps <a name="IBudgetStrategyProps" id="cost-monitoring-construct.IBudgetStrategyProps"></a>

- *Implemented By:* <a href="#cost-monitoring-construct.IApplicationCostMonitoringProps">IApplicationCostMonitoringProps</a>, <a href="#cost-monitoring-construct.IBudgetStrategyProps">IBudgetStrategyProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cost-monitoring-construct.IBudgetStrategyProps.property.monthlyLimitInDollars">monthlyLimitInDollars</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cost-monitoring-construct.IBudgetStrategyProps.property.defaultTopic">defaultTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cost-monitoring-construct.IBudgetStrategyProps.property.subscribers">subscribers</a></code> | <code>string[]</code> | *No description.* |

---

##### `monthlyLimitInDollars`<sup>Required</sup> <a name="monthlyLimitInDollars" id="cost-monitoring-construct.IBudgetStrategyProps.property.monthlyLimitInDollars"></a>

```typescript
public readonly monthlyLimitInDollars: number;
```

- *Type:* number

---

##### `defaultTopic`<sup>Optional</sup> <a name="defaultTopic" id="cost-monitoring-construct.IBudgetStrategyProps.property.defaultTopic"></a>

```typescript
public readonly defaultTopic: string;
```

- *Type:* string

---

##### `subscribers`<sup>Optional</sup> <a name="subscribers" id="cost-monitoring-construct.IBudgetStrategyProps.property.subscribers"></a>

```typescript
public readonly subscribers: string[];
```

- *Type:* string[]

---

### IOptionalBudgetAlertCondition <a name="IOptionalBudgetAlertCondition" id="cost-monitoring-construct.IOptionalBudgetAlertCondition"></a>

- *Implemented By:* <a href="#cost-monitoring-construct.IOptionalBudgetAlertCondition">IOptionalBudgetAlertCondition</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cost-monitoring-construct.IOptionalBudgetAlertCondition.property.comparisonOperator">comparisonOperator</a></code> | <code><a href="#cost-monitoring-construct.ComparisonOperator">ComparisonOperator</a></code> | *No description.* |
| <code><a href="#cost-monitoring-construct.IOptionalBudgetAlertCondition.property.notificationType">notificationType</a></code> | <code><a href="#cost-monitoring-construct.NotificationType">NotificationType</a></code> | *No description.* |
| <code><a href="#cost-monitoring-construct.IOptionalBudgetAlertCondition.property.period">period</a></code> | <code><a href="#cost-monitoring-construct.TimeUnit">TimeUnit</a></code> | *No description.* |
| <code><a href="#cost-monitoring-construct.IOptionalBudgetAlertCondition.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cost-monitoring-construct.IOptionalBudgetAlertCondition.property.thresholdType">thresholdType</a></code> | <code><a href="#cost-monitoring-construct.ThresholdType">ThresholdType</a></code> | *No description.* |

---

##### `comparisonOperator`<sup>Optional</sup> <a name="comparisonOperator" id="cost-monitoring-construct.IOptionalBudgetAlertCondition.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: ComparisonOperator;
```

- *Type:* <a href="#cost-monitoring-construct.ComparisonOperator">ComparisonOperator</a>

---

##### `notificationType`<sup>Optional</sup> <a name="notificationType" id="cost-monitoring-construct.IOptionalBudgetAlertCondition.property.notificationType"></a>

```typescript
public readonly notificationType: NotificationType;
```

- *Type:* <a href="#cost-monitoring-construct.NotificationType">NotificationType</a>

---

##### `period`<sup>Optional</sup> <a name="period" id="cost-monitoring-construct.IOptionalBudgetAlertCondition.property.period"></a>

```typescript
public readonly period: TimeUnit;
```

- *Type:* <a href="#cost-monitoring-construct.TimeUnit">TimeUnit</a>

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="cost-monitoring-construct.IOptionalBudgetAlertCondition.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `thresholdType`<sup>Optional</sup> <a name="thresholdType" id="cost-monitoring-construct.IOptionalBudgetAlertCondition.property.thresholdType"></a>

```typescript
public readonly thresholdType: ThresholdType;
```

- *Type:* <a href="#cost-monitoring-construct.ThresholdType">ThresholdType</a>

---

### IOptionalBudgetProps <a name="IOptionalBudgetProps" id="cost-monitoring-construct.IOptionalBudgetProps"></a>

- *Implemented By:* <a href="#cost-monitoring-construct.IOptionalBudgetProps">IOptionalBudgetProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cost-monitoring-construct.IOptionalBudgetProps.property.alertContdition">alertContdition</a></code> | <code><a href="#cost-monitoring-construct.IOptionalBudgetAlertCondition">IOptionalBudgetAlertCondition</a></code> | *No description.* |
| <code><a href="#cost-monitoring-construct.IOptionalBudgetProps.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cost-monitoring-construct.IOptionalBudgetProps.property.subscribers">subscribers</a></code> | <code>aws-cdk-lib.aws_budgets.CfnBudget.SubscriberProperty[]</code> | *No description.* |
| <code><a href="#cost-monitoring-construct.IOptionalBudgetProps.property.tags">tags</a></code> | <code><a href="#cost-monitoring-construct.ITag">ITag</a>[]</code> | *No description.* |

---

##### `alertContdition`<sup>Optional</sup> <a name="alertContdition" id="cost-monitoring-construct.IOptionalBudgetProps.property.alertContdition"></a>

```typescript
public readonly alertContdition: IOptionalBudgetAlertCondition;
```

- *Type:* <a href="#cost-monitoring-construct.IOptionalBudgetAlertCondition">IOptionalBudgetAlertCondition</a>

---

##### `limit`<sup>Optional</sup> <a name="limit" id="cost-monitoring-construct.IOptionalBudgetProps.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `subscribers`<sup>Optional</sup> <a name="subscribers" id="cost-monitoring-construct.IOptionalBudgetProps.property.subscribers"></a>

```typescript
public readonly subscribers: SubscriberProperty[];
```

- *Type:* aws-cdk-lib.aws_budgets.CfnBudget.SubscriberProperty[]

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cost-monitoring-construct.IOptionalBudgetProps.property.tags"></a>

```typescript
public readonly tags: ITag[];
```

- *Type:* <a href="#cost-monitoring-construct.ITag">ITag</a>[]

---

### ITag <a name="ITag" id="cost-monitoring-construct.ITag"></a>

- *Implemented By:* <a href="#cost-monitoring-construct.ITag">ITag</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cost-monitoring-construct.ITag.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cost-monitoring-construct.ITag.property.value">value</a></code> | <code>string \| number</code> | *No description.* |

---

##### `key`<sup>Required</sup> <a name="key" id="cost-monitoring-construct.ITag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="cost-monitoring-construct.ITag.property.value"></a>

```typescript
public readonly value: string | number;
```

- *Type:* string | number

---

## Enums <a name="Enums" id="Enums"></a>

### ComparisonOperator <a name="ComparisonOperator" id="cost-monitoring-construct.ComparisonOperator"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cost-monitoring-construct.ComparisonOperator.EQUAL_TO">EQUAL_TO</a></code> | *No description.* |
| <code><a href="#cost-monitoring-construct.ComparisonOperator.GREATER_THAN">GREATER_THAN</a></code> | *No description.* |
| <code><a href="#cost-monitoring-construct.ComparisonOperator.LESS_THAN">LESS_THAN</a></code> | *No description.* |

---

##### `EQUAL_TO` <a name="EQUAL_TO" id="cost-monitoring-construct.ComparisonOperator.EQUAL_TO"></a>

---


##### `GREATER_THAN` <a name="GREATER_THAN" id="cost-monitoring-construct.ComparisonOperator.GREATER_THAN"></a>

---


##### `LESS_THAN` <a name="LESS_THAN" id="cost-monitoring-construct.ComparisonOperator.LESS_THAN"></a>

---


### NotificationType <a name="NotificationType" id="cost-monitoring-construct.NotificationType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cost-monitoring-construct.NotificationType.ACTUAL">ACTUAL</a></code> | *No description.* |
| <code><a href="#cost-monitoring-construct.NotificationType.FORECASTED">FORECASTED</a></code> | *No description.* |

---

##### `ACTUAL` <a name="ACTUAL" id="cost-monitoring-construct.NotificationType.ACTUAL"></a>

---


##### `FORECASTED` <a name="FORECASTED" id="cost-monitoring-construct.NotificationType.FORECASTED"></a>

---


### SubscriptionType <a name="SubscriptionType" id="cost-monitoring-construct.SubscriptionType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cost-monitoring-construct.SubscriptionType.EMAIL">EMAIL</a></code> | *No description.* |
| <code><a href="#cost-monitoring-construct.SubscriptionType.SNS">SNS</a></code> | *No description.* |

---

##### `EMAIL` <a name="EMAIL" id="cost-monitoring-construct.SubscriptionType.EMAIL"></a>

---


##### `SNS` <a name="SNS" id="cost-monitoring-construct.SubscriptionType.SNS"></a>

---


### ThresholdType <a name="ThresholdType" id="cost-monitoring-construct.ThresholdType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cost-monitoring-construct.ThresholdType.ABSOLUTE_VALUE">ABSOLUTE_VALUE</a></code> | *No description.* |
| <code><a href="#cost-monitoring-construct.ThresholdType.PERCENTAGE">PERCENTAGE</a></code> | *No description.* |

---

##### `ABSOLUTE_VALUE` <a name="ABSOLUTE_VALUE" id="cost-monitoring-construct.ThresholdType.ABSOLUTE_VALUE"></a>

---


##### `PERCENTAGE` <a name="PERCENTAGE" id="cost-monitoring-construct.ThresholdType.PERCENTAGE"></a>

---


### TimeUnit <a name="TimeUnit" id="cost-monitoring-construct.TimeUnit"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cost-monitoring-construct.TimeUnit.DAILY">DAILY</a></code> | *No description.* |
| <code><a href="#cost-monitoring-construct.TimeUnit.MONTHLY">MONTHLY</a></code> | *No description.* |
| <code><a href="#cost-monitoring-construct.TimeUnit.QUARTERLY">QUARTERLY</a></code> | *No description.* |
| <code><a href="#cost-monitoring-construct.TimeUnit.ANNUALLY">ANNUALLY</a></code> | *No description.* |

---

##### `DAILY` <a name="DAILY" id="cost-monitoring-construct.TimeUnit.DAILY"></a>

---


##### `MONTHLY` <a name="MONTHLY" id="cost-monitoring-construct.TimeUnit.MONTHLY"></a>

---


##### `QUARTERLY` <a name="QUARTERLY" id="cost-monitoring-construct.TimeUnit.QUARTERLY"></a>

---


##### `ANNUALLY` <a name="ANNUALLY" id="cost-monitoring-construct.TimeUnit.ANNUALLY"></a>

---

