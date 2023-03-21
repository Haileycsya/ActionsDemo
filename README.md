# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

```yaml
uses: MoChilia/ActionsDemo@v1.1
with:
  who-to-greet: 'MoChilia'
```

## Some Example workflows:
* `main`: A simple say hello workflow which will be triggered when `push` code to this repo.
* `AzureLoginOIDC`: Login Azure with OIDC by Azure/Login.
* `AzureLoginSecret`: Login Azure with secret by Azure/Login.
* `AzureCLISample`: Execute an Azure CLI script with inline commands by Azure/CLI.
* `AzureCLISampleForFile`: Execute an Azure CLI script with the file in my repo by Azure/CLI.
* `add-labels`: Configure default labels for issues and PRs.
* `SetIdleLabel`: Set the `Idle` label for issues which have been open for 1 day with no activity.
