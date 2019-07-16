# Hex Generator
A simple random hexadecimal generator.

## Installation
```
npm install hex-generator
```

## Usage

```javascript
var hexgen = require('hex-generator');

var hex = hexgen(128);
console.log(hex); // Outputs something like: 128d93ec4e4c737bbeae10c35db6becb
```

## API
```javascript
hexgen(bits)
```

The `bits` parameter indicates how many bits should be generated and expressed as hexadecimal. If `bits`
is omitted the default will be 64 bits (16 hex characters).
