function generateQRCode() {
  var codeInput = document.getElementById('code-input').value;
  var qrCode = new QRCode(document.getElementById('qr-code'), {
    text: codeInput,
    width: 256,
    height: 256,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H,
  });
}
