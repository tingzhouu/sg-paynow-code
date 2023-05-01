# SG PayNow Code

<p align="center">
  <a href="https://github.com/tingzhouu/sg-paynow-code/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="sg-paynow-code is released under the MIT license." />
  </a>
  <a href="https://github.com/tingzhouu/sg-paynow-code/actions/workflows/ci-test.yaml">
    <img src="https://github.com/tingzhouu/sg-paynow-code/actions/workflows/ci-test.yaml/badge.svg" alt="Current CI build status." />
  </a>
  <a href="https://www.npmjs.com/package/sg-paynow-code">
    <img src="https://img.shields.io/npm/v/sg-paynow-code?color=brightgreen&label=npm%20package" alt="Current npm package version." />
  </a>
  <a href="https://github.com/tingzhouu/sg-paynow-code/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
</p>

SG PayNow Code is a JavaScript library to generate a PayNow QR Code.

## Getting Started

If you use yarn

```bash
yarn add sg-paynow-code
```

If you use npm

```bash
npm install sg-paynow-code
```

From a browser
```
<script src="https://unpkg.com/sg-paynow-code/lib/webpack/bundle.js"></script>
```

## Example

See [sample website](https://tingzhouu.github.io/sg-paynow-code).

## Usage

```javascript
import { generatePayNowCode } from 'sg-paynow-code';
// OR
const { generatePayNowCode } = require('sg-paynow-code');

const options = {
  paymentAmount: 888.88,
  recipientIdentifierType: 'MOBILE',
  recipientIdentifier: '+6590901234',
  description: 'Payment reference XX12345678',
  editable: false,
  expiryDate: '20210415',
};

const payNowCode = generatePayNowCode(options);
```

## Options

| Option                  | Description                                                                                                                                                                                                                     |                 Type                 | Is required? |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------: | :----------: |
| paymentAmount           | Amount to transfer. **Note:** Will be rounded to the nearest 2 decimal places if the amount contains > 2 decimal places.                                                                                                        |                Number                |     Yes      |
| recipientIdentifierType | To transfer to either a mobile number or UEN.                                                                                                                                                                                   | String. Either `'MOBILE'` or `'UEN'` |     Yes      |
| recipientIdentifier     | Either your mobile number or UEN, depending on what you have specified in `recipientIdentifierType`. Note: for mobile number, prepend `'+65'`. For example, to indicate `'90901234'` as the mobile number, use `'+6590901234'`. |                String                |     Yes      |
| description             | Details of this transfer. Will be reflected in recipient's transactions statement.                                                                                                                                              |                String                |     Yes      |
| editable                | Whether the payee can edit the details.                                                                                                                                                                                         |               Boolean                |     Yes      |
| expiryDate              | Expiry date of the code, in the format `YYYYMMDD`. For example, to set the expiry date to 15 April 2021, use `'20210415'`.                                                                                                      |                String                |      No      |

## Credits

Credits to [@chengkiang](https://github.com/chengkiang), where I chanced upon this [gist](https://gist.github.com/chengkiang/7e1c4899768245570cc49c7d23bc394c) while researching on the logic behind a PayNow code. All logic was taken from the gist, I merely added on to it.

## Contributing

Pull requests are welcome.

## License

[MIT](https://choosealicense.com/licenses/mit/)
