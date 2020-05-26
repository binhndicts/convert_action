# Convert string value to number

This action will convert a string to int or float

## Inputs

### `value`

**Required** The value need to be converted

### `type`

Type of result

**Default** int

## Outputs

### `result`

The result of convert

## Example usage

uses: actions/convert_action@v1
with:
  value: '1234'
  type: 'int'
