
# Json First

## Structure

`JsonFirst`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `context` | `string[]` | Required | - |
| `type` | `string[]` | Required | - |
| `verifiableCredential` | [`VerifiableCredential[]`](../../doc/models/verifiable-credential.md) | Required | - |
| `id` | `string` | Required | - |
| `holder` | `string` | Required | - |
| `proof` | [`Proof1`](../../doc/models/proof-1.md) | Required | - |

## Example (as JSON)

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "type": [
    "VerifiablePresentation"
  ],
  "verifiableCredential": [
    {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
      ],
      "id": "http://example.edu/credentials/1872",
      "type": [
        "VerifiableCredential",
        "DrivingLicenseCredential"
      ],
      "issuer": "Government Of India",
      "issuanceDate": "2010-01-01T19:23:24Z",
      "credentialSubject": {
        "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
        "License": {
          "type": "Driving License",
          "DLNumber": "UPABHISHEK16AX6539"
        }
      },
      "proof": {
        "type": "Ed25519Signature2018",
        "created": "2020-02-03T17:23:49Z",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..AUQ3AJ23WM5vMOWNtYKuqZBekRAOUibOMH9XuvOd39my1sO-X9R4QyAXLD2ospssLvIuwmQVhJa-F0xMOnkvBg",
        "proofPurpose": "assertionMethod",
        "verificationMethod": "https://example.edu/issuers/keys/1"
      }
    }
  ],
  "id": "ebc6f1c2",
  "holder": "did:example:7564cb9c-165c-4857-a887-bfc2460af867",
  "proof": {
    "type": "Ed25519Signature2018",
    "created": "2019-02-03T17:23:49Z",
    "challenge": "12ec21",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..ZO4Lkq8-fOruE4oUvuMaxepGX-vLD2gPyNIsz-iA7X0tzC3_96djaBYDxxl6wD1xKrx0h60NjI9i9p_MxoXkDQ",
    "proofPurpose": "authentication",
    "verificationMethod": "https://example.edu/issuers/keys/1"
  }
}
```

