
# Proof 1

## Structure

`Proof1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | - |
| `created` | `string` | Required | - |
| `challenge` | `string` | Required | - |
| `jws` | `string` | Required | - |
| `proofPurpose` | `string` | Required | - |
| `verificationMethod` | `string` | Required | - |

## Example (as JSON)

```json
{
  "type": "Ed25519Signature2018",
  "created": "2019-02-03T17:23:49Z",
  "challenge": "12ec21",
  "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..ZO4Lkq8-fOruE4oUvuMaxepGX-vLD2gPyNIsz-iA7X0tzC3_96djaBYDxxl6wD1xKrx0h60NjI9i9p_MxoXkDQ",
  "proofPurpose": "authentication",
  "verificationMethod": "https://example.edu/issuers/keys/1"
}
```

