const core = require('@actions/core');
const github = require('@actions/github');

try {
  const input = core.getInput('value');
  const type = core.getInput('type');
  console.log('input', input, 'type', type);
  const result = type === 'int' ? parseInt(input) : parseFloat(input);
  console.log('output', result);
  core.setOutput('result', result);
} catch (error) {
  core.setFailed(error.message);
}
