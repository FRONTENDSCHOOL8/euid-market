//폰 번호 입력시 입력창에 000 0000 0000 형태로 형식화 및 제한
export function phoneNumFormat(input) {
  let value = input.value.replace(/\D/g, ''); // 숫자가 아닌 모든 문자 제거
  let formattedNumber = '';

  // 숫자를 3-4-4 형식으로 분할
  if (value.length > 3) {
    formattedNumber += value.substr(0, 3) + ' ';
    if (value.length >= 7) {
      formattedNumber += value.substr(3, 4) + ' ' + value.substr(7);
    } else {
      formattedNumber += value.substr(3);
    }
  } else {
    formattedNumber = value;
  }

  input.value = formattedNumber.trim(); // 입력값 업데이트
}
