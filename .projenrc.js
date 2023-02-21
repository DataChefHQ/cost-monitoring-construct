const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
    author: 'kiarash kiani',
    authorAddress: 'kiarash@datachef.co',
    cdkVersion: '2.1.0',
    defaultReleaseBranch: 'main',
    name: 'cost-monitoring-construct',
    keywords: ['cost-explorer', 'monitoring', 'budget', 'alert'],
    defaultReleaseBranch: 'main',
    repositoryUrl: 'https://github.com/DataChefHQ/cost-monitoring-construct.git',
    gitignore: [
        '.vscode',
    ],
    description: 'A CDK construct that helps track applications\' costs separately and receive alerts in case of unpredicted resource usage',
    disableTsconfig: false,
    tsconfigDev: {
        compilerOptions: {
            noUnusedLocals: false,
        },
    },

    // Artifact config: Python
    publishToPypi: {
        distName: 'cost-monitoring-construct',
        module: 'cost_monitoring_construct',
    },
    // Artifact config: C#
    publishToNuget: {
        packageId: 'DataChef.CostMonitoringConstruct',
        dotNetNamespace: 'DataChef.CostMonitoringConstruct',
    },
    // TODO: adding a Java release.
    // Artifact config: Java
    // publishToMaven: {
    // mavenGroupId: 'co.datachef',
    // javaPackage: 'co.datachef.costmonitoringconstruct',
    // mavenArtifactId: 'costmonitoringconstruct',
    // },

    // TODO: adding a Go release.
    // Artifact config: Go
    // publishToGo: {
    //   moduleName: "https://github.com/DataChefHQ/cost-monitoring-construct",
    // },

    // deps: [],        /* Runtime dependencies of this module. */
    // devDeps: [],       /* Build dependencies for this module. */
    // packageName: undefined,  /* The 'name' in package.json. */
});


project.eslint.addRules({
    '@typescript-eslint/indent': [
        'error',
        4,
    ],
});

project.synth();
