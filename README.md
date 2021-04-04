# SG PayNow Code

SG PayNow Code is a JavaScript library to generate a PayNow Code. You can create a QR Code for people to pay you!

## Getting Started

If you use yarn

```bash
yarn add sg-paynow-code
```

If you use npm

```bash
npm install sg-paynow-code
```

## Usage

```javascript
import { generatePayNowCode } from 'sg-paynow-code';
// OR
const { generatePayNowCode } = require('sg-paynow-code');

const payNowCode = generatePayNowCode(options);
```

## Options

| Option                  | Description                                                                                                                                                                                                                   |               Type               | Is required? |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------: | :----------: |
| paymentAmount           | Amount to transfer. **Note:** Will be rounded to the nearest 2 decimal places if the amount contains > 2 decimal places.                                                                                                      |              Number              |     Yes      |
| recipientIdentifierType | To transfer to either a mobile number or UEN.                                                                                                                                                                                 | String. Either 'MOBILE' or 'UEN' |     Yes      |
| recipientIdentifier     | Either your mobile number or UEN, depending on what you have specified in `recipientIdentifierType`. Note: for mobile number, prepend '+65'. For example, to indicate `'90901234'` as the mobile number, use `'+6590901234'`. |              String              |     Yes      |
| description             | Details of this transfer. Will be reflected in recipient's transactions statement.                                                                                                                                            |              String              |     Yes      |
| editable                | Whether the payee can edit the details.                                                                                                                                                                                       |             Boolean              |     Yes      |
| expiryDate              | Expiry date of the code, the format YYYYMMDD. For example, to set the expiry date to 15 April 2021, use `'20210415'`.                                                                                                         |              String              |      No      |

## Credits

Credits to [@chengkiang](https://github.com/chengkiang), where I chanced upon this [gist](https://gist.github.com/chengkiang/7e1c4899768245570cc49c7d23bc394c) while researching on the logic behind a PayNow code. All logic was taken from the gist, I merely added on to it.

## Contributing

Pull requests are welcome.

## License

[MIT](https://choosealicense.com/licenses/mit/)
