


export function 

function formatPhoneNumber() {
  var input = document.getElementById('phone');
  var formattedNumber = input.value.replace(/\D/g, '').substring(0, 10);
  var match = formattedNumber.match(/^(\d{3})(\d{0,4})(\d{0,4})$/);
  if (match) {
    input.value = `${match[1]} ${match[2]} ${match[3]}`.trim();
  }
}
