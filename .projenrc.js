const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'kiarash kiani',
  authorAddress: 'kiarash@datachef.co',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'cost-monitoring-construct',
  repositoryUrl: 'https://github.com/DataChefHQ/cost-monitoring-construct.git',
  gitignore: [
    '.vscode',
  ],
  description: 'A CDK construct that helps track applications\' costs separately and receive alerts in case of unpredicted resource usage',

  // deps: [],                /* Runtime dependencies of this module. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
