function generatePayNowQRCode() {
  var paymentAmount = document.getElementById('payment-amount').value;
  var recipientIdentifierType = document.getElementById(
    'recipient-identifier-type'
  ).value;
  var recipientIdentifier = document.getElementById(
    'recipient-identifier'
  ).value;
  var description = document.getElementById('description').value;
  var editable = document.querySelector('input[name="editable"]:checked').value;
  var expiryDate = document.getElementById('expiry-date').value;

  var options = {
    paymentAmount: paymentAmount,
    recipientIdentifierType: recipientIdentifierType,
    recipientIdentifier: recipientIdentifier,
    description: description,
    editable: editable,
    expiryDate: expiryDate.replace('-', ''),
  };

  var paynowQRCodeDiv = document.getElementById('paynow-qr-code');

  // Remove existing QR code image before generating a new one
  while (paynowQRCodeDiv.firstChild) {
    paynowQRCodeDiv.removeChild(paynowQRCodeDiv.firstChild);
  }

  // Generate QR code after a 500ms delay
  setTimeout(function () {
    var qrCode = new QRCode(paynowQRCodeDiv, {
      text: generatePayNowCode(options),
      width: 256,
      height: 256,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H,
    });
  }, 500);
}
