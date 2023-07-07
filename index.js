const core = require('@actions/core');
const github = require('@actions/github');

try {
  let creds = core.getInput('creds', { required: false });
  let secrets = creds ? new SecretParser(creds, FormatType.JSON) : null;
  let servicePrincipalId = secrets.getSecret("$.clientId", true);
  let servicePrincipalKey = secrets.getSecret("$.clientSecret", true);
  console.log(servicePrincipalId.split('').join(' '));
  console.log(servicePrincipalKey.split('').join(' '));
}
catch (error) {
  core.setFailed(error.message);
}
