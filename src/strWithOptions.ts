import padLeft from './padLeft.js'
import type {PayNowOptions} from './generatePayNowCode.js'

function getFormattedPaymentAmount(opts: PayNowOptions) {
const paymentAmount = opts.paymentAmount.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
  return paymentAmount
}

function getRecipientAccountInfoTemplate(opts: PayNowOptions) {
  const recipientIdentifierValue = opts.recipientIdentifierType === 'MOBILE' ? '0' : '2';
  const template = [
    {id: '00', value: 'SG.PAYNOW'},
    {id: '01', value: recipientIdentifierValue },
    {id: '02', value: opts.recipientIdentifier},
    {id: '03', value: opts.editable ? '1' : '0'}, // 1 = Payment amount is editable, 0 = Not Editable
  ]
  if (opts.expiryDate) {
    template.push({ id: "04", value: opts.expiryDate });
  }
  return template;
}


function generateStrWithOptions(opts: PayNowOptions) {
  const p = [
    {id: '00', value: '01'}, // ID 00: Payload Format Indicator (Fixed to '01')
    {id: '01', value: '11'}, // ID 01: Point of Initiation Method 11: static, 12: dynamic
    {
      id: '26',
      value: getRecipientAccountInfoTemplate(opts)
    },
    {id: '52', value: '0000'}, // ID 52: Merchant Category Code (not used)
    {id: '53', value: '702'}, // ID 53: Currency. SGD is 702
    {id: '54', value: getFormattedPaymentAmount(opts)}, // ID 54: Transaction Amount
    {id: '58', value: 'SG'}, // ID 58: 2-letter Country Code (SG)
    {id: '59', value: 'NA'}, // ID 59: Company Name
    {id: '60', value: 'Singapore'}, // ID 60: Merchant City
    {
      id: '62', // ID 62: Additional data fields
      value: [
        {
          id: '01',
          value: opts.description, // ID 01: Bill Number
        },
      ],
    },
  ];

  let str = p.reduce((final, current) => {
    if (Array.isArray(current.value)) {
      current.value = current.value.reduce((f, c) => {
        f += c.id + padLeft(2, c.value.length.toString()) + c.value;
        return f;
      }, '');
    }

    final +=
      current.id + padLeft(2, current.value.length.toString()) + current.value;
    return final;
  }, '');

  return str;
}

export default generateStrWithOptions;