const { awscdk } = require("projen");
const project = new awscdk.AwsCdkConstructLibrary({
  author: "Kiarash Kiani",
  authorAddress: "Kiarash@DataChef.co",
  cdkVersion: "2.1.0",
  defaultReleaseBranch: "main",
  name: "cost-monitoring-construct",
  keywords: ["cost-explorer", "monitoring", "budget", "alert"],
  majorVersion: 1,
  repositoryUrl: "https://github.com/DataChefHQ/cost-monitoring-construct.git",
  gitignore: [".vscode"],
  description:
    "A CDK construct that helps track applications' costs separately and receive alerts in case of unpredicted resource usage",
  eslint: false,
  prettier: true,
  docgenFilePath: "API",

  pullRequestTemplateContents: [
    `<!--- Provide a general summary of your changes in the Title above -->

        ## Description
        <!--- Describe your changes in detail -->
        
        ## Related Issue
        <!--- This project only accepts pull requests related to open issues -->
        <!--- If suggesting a new feature or change, please discuss it in an issue first -->
        <!--- If fixing a bug, there should be an issue describing it with steps to reproduce -->
        <!--- Please link to the issue here: -->
        
        ## Motivation and Context
        <!--- Why is this change required? What problem does it solve? -->
        <!--- If it fixes an open issue, please link to the issue here. -->
        
        ## How Has This Been Tested?
        <!--- Please describe in detail how you tested your changes. -->
        <!--- Include details of your testing environment and the tests you ran to -->
        <!--- see how your change affects other areas of the code, etc. -->
        
        ## Screenshots (if appropriate):`,
  ],

  // Artifact config: Python
  publishToPypi: {
    distName: "cost-monitoring-construct",
    module: "cost_monitoring_construct",
  },
  // Artifact config: C#
  publishToNuget: {
    packageId: "DataChef.CostMonitoringConstruct",
    dotNetNamespace: "DataChef.CostMonitoringConstruct",
  },
  // Artifact config: Go
  publishToGo: {
    moduleName: "github.com/DataChefHQ/cost-monitoring-construct",
    githubTokenSecret: "GITHUB_TOKEN",
  },
  // TODO: adding a Java release.
  // Artifact config: Java
  // publishToMaven: {
  // mavenGroupId: 'co.datachef',
  // javaPackage: 'co.datachef.costmonitoringconstruct',
  // mavenArtifactId: 'costmonitoringconstruct',
  // },

  // deps: [],        /* Runtime dependencies of this module. */
  // devDeps: [],       /* Build dependencies for this module. */
  // packageName: undefined,  /* The 'name' in package.json. */
});

project.synth();
