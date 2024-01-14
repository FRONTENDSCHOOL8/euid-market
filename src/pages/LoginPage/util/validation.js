export function validation(phoneInput, codeButton) {
  const phoneNumber = phoneInput.value;

  // 입력된 값이 정확히 11자리이며, 첫 시작이 010인지 확인
  if (/^010\d{8}$/.test(phoneNumber)) {
    // 버튼 활성화 및 스타일 변경
    codeButton.disabled = false;
    codeButton.style.borderColor = 'black';
    codeButton.style.color = 'black';
  } else {
    // 버튼 비활성화 및 기본 스타일 적용
    codeButton.disabled = true;
    codeButton.style.borderColor = '';
    codeButton.style.color = '';
  }
}

//11자리 숫자가 입력되면 버튼 활성화
// phoneInput.addEventListener('input', function () {
//   const phoneNumber = phoneInput.value;

//   // 입력된 값이 11자리 숫자인지 확인
//   if (phoneNumber.length === 11 && /^\d+$/.test(phoneNumber)) {
//     // 버튼 활성화 및 스타일 변경
//     codeButton.disabled = false;
//     codeButton.style.borderColor = 'black';
//     codeButton.style.color = 'black';
//   } else {
//     // 버튼 비활성화 및 기본 스타일 적용
//     codeButton.disabled = true;
//     codeButton.style.borderColor = '';
//     codeButton.style.color = '';
//   }
// });
