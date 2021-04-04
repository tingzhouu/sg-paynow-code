import getStrWithOptions from './strWithOptions.js'
import crc16CheckSum from './crc16CheckSum.js'

export interface PayNowOptions {
  paymentAmount: number,
  recipientIdentifierType: 'MOBILE' | 'UEN',
  recipientIdentifier: string,
  description: string,
  editable: boolean,
  expiryDate?: string,
}

function generatePayNowCode(opts: PayNowOptions) {
  const strWithOptions = getStrWithOptions(opts);
  const checkSum = crc16CheckSum(`${strWithOptions}6304`);

  return `${strWithOptions}6304${checkSum}`
}

export default generatePayNowCode;