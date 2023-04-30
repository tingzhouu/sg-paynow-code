import generatePayNowCode from './generatePayNowCode';
import assert from 'node:assert';

describe('generatePayNowCode', () => {
  it('should generate a paynow code', () => {
    const res = generatePayNowCode({
      paymentAmount: 888.88,
      recipientIdentifierType: 'MOBILE',
      recipientIdentifier: '+6590901234',
      description: 'Payment reference XX12345678',
      editable: false,
      expiryDate: '20500415',
    });
    assert.equal(
      res,
      '00020101021126500009SG.PAYNOW010100211+6590901234030100408205004155204000053037025406888.885802SG5902NA6009Singapore62320128Payment reference XX1234567863046B73'
    );
  });
});
