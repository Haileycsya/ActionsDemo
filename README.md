A test to see if it will be triggered by a pr

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
