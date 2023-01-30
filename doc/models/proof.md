
# Proof

## Structure

`Proof`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | - |
| `created` | `string` | Required | - |
| `jws` | `string` | Required | - |
| `proofPurpose` | `string` | Required | - |
| `verificationMethod` | `string` | Required | - |

## Example (as JSON)

```json
{
  "type": "Ed25519Signature2018",
  "created": "2020-02-03T17:23:49Z",
  "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..AUQ3AJ23WM5vMOWNtYKuqZBekRAOUibOMH9XuvOd39my1sO-X9R4QyAXLD2ospssLvIuwmQVhJa-F0xMOnkvBg",
  "proofPurpose": "assertionMethod",
  "verificationMethod": "https://example.edu/issuers/keys/1"
}
```

