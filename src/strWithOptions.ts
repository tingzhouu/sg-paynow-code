import padLeft from './padLeft.js'
import {PayNowOptions} from './generatePayNowCode'


function generateStrWithOptions(opts: PayNowOptions) {
  const p = [
    {id: '00', value: '01'}, // ID 00: Payload Format Indicator (Fixed to '01')
    {id: '01', value: '12'}, // ID 01: Point of Initiation Method 11: static, 12: dynamic
    {
      id: '26',
      // ID 26: Merchant Account Info Template
      value: [
        {id: '00', value: 'SG.PAYNOW'},
        {id: '01', value: '2'}, // 0 for mobile, 2 for UEN. 1 is not used.
        {id: '02', value: opts.uen}, // PayNow UEN (Company Unique Entity Number)
        {id: '03', value: opts.editable.toString()}, // 1 = Payment amount is editable, 0 = Not Editable
        // { id: "04", value: opts.expiry },
      ], // Expiry date (YYYYMMDD)
    },
    {id: '52', value: '0000'}, // ID 52: Merchant Category Code (not used)
    {id: '53', value: '702'}, // ID 53: Currency. SGD is 702
    {id: '54', value: opts.amount.toString()}, // ID 54: Transaction Amount
    {id: '58', value: 'SG'}, // ID 58: 2-letter Country Code (SG)
    {id: '59', value: 'COMPANY NAME'}, // ID 59: Company Name
    {id: '60', value: 'Singapore'}, // ID 60: Merchant City
    {
      id: '62',
      value: [
        {
          // ID 62: Additional data fields
          id: '01',
          value: opts.refNumber, // ID 01: Bill Number
        },
      ],
    },
  ];

  let str = p.reduce((final, current) => {
    if (Array.isArray(current.value)) {
      //nest loop
      current.value = current.value.reduce((f, c) => {
        // before edit
        // f += c.id + c.value.length.toString().padLeft(2) + c.value;

        // after edit
        f += c.id + padLeft(2, c.value.length.toString()) + c.value;
        return f;
      }, '');
    }

    // before edit
    // final +=
    //   current.id + current.value.length.toString().padLeft(2) + current.value;

    // after edit
    final +=
      current.id + padLeft(2, current.value.length.toString()) + current.value;
    return final;
  }, '');
  return str;
}

export default generateStrWithOptions