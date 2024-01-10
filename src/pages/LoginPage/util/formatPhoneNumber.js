
export function formatPhoneNumber(phoneNumber) {
  var formattedNumber = phoneNumber.replace(/\D/g, '').substring(0, 10);
  var match = formattedNumber.match(/^(\d{3})(\d{0,4})(\d{0,4})$/);
  if (match) {
    return `${match[1]} ${match[2]} ${match[3]}`.trim();
  }
  return phoneNumber;
}

