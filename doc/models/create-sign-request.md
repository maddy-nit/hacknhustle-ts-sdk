
# Create Sign Request

## Structure

`CreateSignRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `message` | [`Message`](../../doc/models/message.md) | Required | - |
| `privateKey` | [`PrivateKey`](../../doc/models/private-key.md) | Required | - |

## Example (as JSON)

```json
{
  "message": {
    "Mobile Number": "9540667575"
  },
  "private_key": {
    "kty": "EC",
    "crv": "secp256k1",
    "d": "IXoW0oPYOuL8byFiiRlQMlYAhs-01e1iqiPLVqY9ua8",
    "x": "1GOsFpNCK9ELo-tim3YletR0Iw-nXvt43Yo39HdZueU",
    "y": "Ht_gMpAqXoWej7qRmuDEYF3xJBwIGo0H4YtDuHX4iNE"
  }
}
```

