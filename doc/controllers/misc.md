# Misc

```ts
const miscController = new MiscController(client);
```

## Class Name

`MiscController`

## Methods

* [Create Did](../../doc/controllers/misc.md#create-did)
* [Resolve Did](../../doc/controllers/misc.md#resolve-did)
* [Verify Sign](../../doc/controllers/misc.md#verify-sign)
* [Create Sign](../../doc/controllers/misc.md#create-sign)
* [Signature Parser](../../doc/controllers/misc.md#signature-parser)
* [Json Compare](../../doc/controllers/misc.md#json-compare)
* [QR Code](../../doc/controllers/misc.md#qr-code)


# Create Did

```ts
async createDid(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await miscController.createDid();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Resolve Did

```ts
async resolveDid(
  did: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `did` | `string` | Query, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const did = 'did:ion:EiAtV0HmXmtvY-XXOIuK0Xbg8BpFA_r6fLsmiNVY_8UvQg';
try {
  const { result, ...httpResponse } = await miscController.resolveDid(did);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Verify Sign

```ts
async verifySign(
  signature: string,
  body: VerifySignRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `signature` | `string` | Query, Required | - |
| `body` | [`VerifySignRequest`](../../doc/models/verify-sign-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const signature = 'eyJhbGciOiJFUzI1NksifQ.eyJNb2JpbGUgTnVtYmVyIjoiOTU0MDY2NzU3NSJ9.Y8UXYDPv77PYvyxpSkhFtyH7kHqrU1aNwlgpHHksoEBCpXHa3XSL8-WZHSRRO9X0DFjBfDTzNrMsSkXITV8tPA';
const bodyPublicKey: PublicKey = {
  kty: 'EC',
  crv: 'secp256k1',
  x: 'pUC_rt64xNaJ8scD3LJnjU_CCN-Z1zQ2tVuIGsJzH4M',
  y: 'uTTM0Pf_3paUiQXM3eCp-WdAkfY17Xr87S3G6ZDHI7s',
};

const body: VerifySignRequest = {
  publicKey: bodyPublicKey,
};

try {
  const { result, ...httpResponse } = await miscController.verifySign(signature, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Sign

```ts
async createSign(
  body: CreateSignRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateSignRequest`](../../doc/models/create-sign-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const bodyMessage: Message = {
  mobileNumber: '9540667575',
};

const bodyPrivateKey: PrivateKey = {
  kty: 'EC',
  crv: 'secp256k1',
  d: 'IXoW0oPYOuL8byFiiRlQMlYAhs-01e1iqiPLVqY9ua8',
  x: '1GOsFpNCK9ELo-tim3YletR0Iw-nXvt43Yo39HdZueU',
  y: 'Ht_gMpAqXoWej7qRmuDEYF3xJBwIGo0H4YtDuHX4iNE',
};

const body: CreateSignRequest = {
  message: bodyMessage,
  privateKey: bodyPrivateKey,
};

try {
  const { result, ...httpResponse } = await miscController.createSign(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Signature Parser

```ts
async signatureParser(
  signature: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `signature` | `string` | Query, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const signature = 'eyJhbGciOiJFUzI1NksifQ.eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSIsImh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL2V4YW1wbGVzL3YxIl0sInR5cGUiOlsiVmVyaWZpYWJsZVByZXNlbnRhdGlvbiJdLCJ2ZXJpZmlhYmxlQ3JlZGVudGlhbCI6W3siQGNvbnRleHQiOlsiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjEiLCJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy9leGFtcGxlcy92MSJdLCJpZCI6Imh0dHA6Ly9leGFtcGxlLmVkdS9jcmVkZW50aWFscy8xODcyIiwidHlwZSI6WyJWZXJpZmlhYmxlQ3JlZGVudGlhbCIsIkRyaXZpbmdMaWNlbnNlQ3JlZGVudGlhbCJdLCJpc3N1ZXIiOiJHb3Zlcm5tZW50IE9mIEluZGlhIiwiaXNzdWFuY2VEYXRlIjoiMjAxMC0wMS0wMVQxOToyMzoyNFoiLCJjcmVkZW50aWFsU3ViamVjdCI6eyJpZCI6ImRpZDpleGFtcGxlOmViZmViMWY3MTJlYmM2ZjFjMjc2ZTEyZWMyMSIsIkxpY2Vuc2UiOnsidHlwZSI6IkRyaXZpbmcgTGljZW5zZSIsIkRMTnVtYmVyIjoiVVBBQkhJU0hFSzE2QVg2NTM5In19LCJwcm9vZiI6eyJ0eXBlIjoiRWQyNTUxOVNpZ25hdHVyZTIwMTgiLCJjcmVhdGVkIjoiMjAyMC0wMi0wM1QxNzoyMzo0OVoiLCJqd3MiOiJleUpoYkdjaU9pSkZaRVJUUVNJc0ltSTJOQ0k2Wm1Gc2MyVXNJbU55YVhRaU9sc2lZalkwSWwxOS4uQVVRM0FKMjNXTTV2TU9XTnRZS3VxWkJla1JBT1VpYk9NSDlYdXZPZDM5bXkxc08tWDlSNFF5QVhMRDJvc3Bzc0x2SXV3bVFWaEphLUYweE1Pbmt2QmciLCJwcm9vZlB1cnBvc2UiOiJhc3NlcnRpb25NZXRob2QiLCJ2ZXJpZmljYXRpb25NZXRob2QiOiJodHRwczovL2V4YW1wbGUuZWR1L2lzc3VlcnMva2V5cy8xIn19XSwiaWQiOiJlYmM2ZjFjMiIsImhvbGRlciI6ImRpZDpleGFtcGxlOjc1NjRjYjljLTE2NWMtNDg1Ny1hODg3LWJmYzI0NjBhZjg2NyIsInByb29mIjp7InR5cGUiOiJFZDI1NTE5U2lnbmF0dXJlMjAxOCIsImNyZWF0ZWQiOiIyMDE5LTAyLTAzVDE3OjIzOjQ5WiIsImNoYWxsZW5nZSI6IjEyZWMyMSIsImp3cyI6ImV5SmhiR2NpT2lKRlpFUlRRU0lzSW1JMk5DSTZabUZzYzJVc0ltTnlhWFFpT2xzaVlqWTBJbDE5Li5aTzRMa3E4LWZPcnVFNG9VdnVNYXhlcEdYLXZMRDJnUHlOSXN6LWlBN1gwdHpDM185NmRqYUJZRHh4bDZ3RDF4S3J4MGg2ME5qSTlpOXBfTXhvWGtEUSIsInByb29mUHVycG9zZSI6ImF1dGhlbnRpY2F0aW9uIiwidmVyaWZpY2F0aW9uTWV0aG9kIjoiaHR0cHM6Ly9leGFtcGxlLmVkdS9pc3N1ZXJzL2tleXMvMSJ9fQ.OmnNiyn4eftFaC56eqevajBfmvaPt26GQKMOwFW0aed6Idb7ibdbgY_WRd8ygAZAgj83Onk5UEUpt4f4IHiRpA';
try {
  const { result, ...httpResponse } = await miscController.signatureParser(signature);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Json Compare

```ts
async jsonCompare(
  body: JsonCompareRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`JsonCompareRequest`](../../doc/models/json-compare-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = null;
const bodyJsonFirstContext: string[] = ['https://www.w3.org/2018/credentials/v1', 'https://www.w3.org/2018/credentials/examples/v1'];
const bodyJsonFirstType: string[] = ['VerifiablePresentation'];
const bodyJsonFirstVerifiableCredential: VerifiableCredential[] = [];

const bodyJsonFirstverifiableCredential0Context: string[] = ['https://www.w3.org/2018/credentials/v1', 'https://www.w3.org/2018/credentials/examples/v1'];
const bodyJsonFirstverifiableCredential0Type: string[] = ['VerifiableCredential', 'DrivingLicenseCredential'];
const bodyJsonFirstverifiableCredential0CredentialSubjectLicense: License = {
  type: 'Driving License',
  dLNumber: 'UPABHISHEK16AX6539',
};

const bodyJsonFirstverifiableCredential0CredentialSubject: CredentialSubject = {
  id: 'did:example:ebfeb1f712ebc6f1c276e12ec21',
  license: bodyJsonFirstverifiableCredential0CredentialSubjectLicense,
};

const bodyJsonFirstverifiableCredential0Proof: Proof = {
  type: 'Ed25519Signature2018',
  created: '2020-02-03T17:23:49Z',
  jws: 'eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..AUQ3AJ23WM5vMOWNtYKuqZBekRAOUibOMH9XuvOd39my1sO-X9R4QyAXLD2ospssLvIuwmQVhJa-F0xMOnkvBg',
  proofPurpose: 'assertionMethod',
  verificationMethod: 'https://example.edu/issuers/keys/1',
};

const bodyJsonFirstverifiableCredential0: VerifiableCredential = {
  context: bodyJsonFirstverifiableCredential0Context,
  id: 'http://example.edu/credentials/1872',
  type: bodyJsonFirstverifiableCredential0Type,
  issuer: 'Government Of India',
  issuanceDate: '2010-01-01T19:23:24Z',
  credentialSubject: bodyJsonFirstverifiableCredential0CredentialSubject,
  proof: bodyJsonFirstverifiableCredential0Proof,
};

bodyJsonFirstVerifiableCredential[0] = bodyJsonFirstverifiableCredential0;

const bodyJsonFirstProof: Proof1 = {
  type: 'Ed25519Signature2018',
  created: '2019-02-03T17:23:49Z',
  challenge: '12ec21',
  jws: 'eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..ZO4Lkq8-fOruE4oUvuMaxepGX-vLD2gPyNIsz-iA7X0tzC3_96djaBYDxxl6wD1xKrx0h60NjI9i9p_MxoXkDQ',
  proofPurpose: 'authentication',
  verificationMethod: 'https://example.edu/issuers/keys/1',
};

const bodyJsonFirst: JsonFirst = {
  context: bodyJsonFirstContext,
  type: bodyJsonFirstType,
  verifiableCredential: bodyJsonFirstVerifiableCredential,
  id: 'ebc6f1c2',
  holder: 'did:example:7564cb9c-165c-4857-a887-bfc2460af867',
  proof: bodyJsonFirstProof,
};

const bodyJsonSecondContext: string[] = ['https://www.w3.org/2018/credentials/v1', 'https://www.w3.org/2018/credentials/examples/v1'];
const bodyJsonSecondType: string[] = ['VerifiablePresentation'];
const bodyJsonSecondVerifiableCredential: VerifiableCredential[] = [];

const bodyJsonSecondverifiableCredential0Context: string[] = ['https://www.w3.org/2018/credentials/v1', 'https://www.w3.org/2018/credentials/examples/v1'];
const bodyJsonSecondverifiableCredential0Type: string[] = ['VerifiableCredential', 'DrivingLicenseCredential'];
const bodyJsonSecondverifiableCredential0CredentialSubjectLicense: License = {
  type: 'Driving License',
  dLNumber: 'UPABHISHEK16AX6539',
};

const bodyJsonSecondverifiableCredential0CredentialSubject: CredentialSubject = {
  id: 'did:example:ebfeb1f712ebc6f1c276e12ec21',
  license: bodyJsonSecondverifiableCredential0CredentialSubjectLicense,
};

const bodyJsonSecondverifiableCredential0Proof: Proof = {
  type: 'Ed25519Signature2018',
  created: '2020-02-03T17:23:49Z',
  jws: 'eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..AUQ3AJ23WM5vMOWNtYKuqZBekRAOUibOMH9XuvOd39my1sO-X9R4QyAXLD2ospssLvIuwmQVhJa-F0xMOnkvBg',
  proofPurpose: 'assertionMethod',
  verificationMethod: 'https://example.edu/issuers/keys/1',
};

const bodyJsonSecondverifiableCredential0: VerifiableCredential = {
  context: bodyJsonSecondverifiableCredential0Context,
  id: 'http://example.edu/credentials/1872',
  type: bodyJsonSecondverifiableCredential0Type,
  issuer: 'Government Of India',
  issuanceDate: '2010-01-01T19:23:24Z',
  credentialSubject: bodyJsonSecondverifiableCredential0CredentialSubject,
  proof: bodyJsonSecondverifiableCredential0Proof,
};

bodyJsonSecondVerifiableCredential[0] = bodyJsonSecondverifiableCredential0;

const bodyJsonSecondProof: Proof1 = {
  type: 'Ed25519Signature2018',
  created: '2019-02-03T17:23:49Z',
  challenge: '12ec21',
  jws: 'eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..ZO4Lkq8-fOruE4oUvuMaxepGX-vLD2gPyNIsz-iA7X0tzC3_96djaBYDxxl6wD1xKrx0h60NjI9i9p_MxoXkDQ',
  proofPurpose: 'authentication',
  verificationMethod: 'https://example.edu/issuers/keys/1',
};

const bodyJsonSecond: JsonSecond = {
  context: bodyJsonSecondContext,
  type: bodyJsonSecondType,
  verifiableCredential: bodyJsonSecondVerifiableCredential,
  id: 'ebc6f1c2',
  holder: 'did:example:7564cb9c-165c-4857-a887-bfc2460af867',
  proof: bodyJsonSecondProof,
};

const body: JsonCompareRequest = {
  jsonFirst: bodyJsonFirst,
  jsonSecond: bodyJsonSecond,
};

try {
  const { result, ...httpResponse } = await miscController.jsonCompare(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# QR Code

```ts
async qRCode(
  body: QRCodeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`QRCodeRequest`](../../doc/models/qr-code-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = null;
const body: QRCodeRequest = {
  name: 'Employee Name',
  age: 27,
  department: 'Police',
  id: 'aisuoiqu3234738jdhf100223',
};

try {
  const { result, ...httpResponse } = await miscController.qRCode(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

