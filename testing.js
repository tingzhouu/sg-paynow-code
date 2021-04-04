// import generatePayNowCode from './lib/esm/generatePayNowCode';

const { generatePayNowCode } = require('./lib/cjs');

console.log(
  'code is',
  generatePayNowCode({
    amount: 123,
    uen: '201724328G',
    refNumber: 'PP124-0018878',
    editable: 1,
  })
);
