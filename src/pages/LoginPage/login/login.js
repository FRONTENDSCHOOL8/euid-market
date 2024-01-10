import { generateRandomCode, phoneNumFormat } from '/src/pages/LoginPage/util/'; 
import {getNode, getNodes, tiger} from '/src/lib/'


function requestVerification() {
  // 활성화된 버튼 확인
  const verifyButton = document.getElementById('verify-button');
  if (!verifyButton.hasAttribute('aria-disabled')) {
    // .login--code-section, #start-button, .login--nocode 요소 표시
    const codeSection = document.querySelector('.login--code-section');
    const startButton = document.getElementById('start-button');
    const noCodeLink = document.querySelector('.login--nocode');
    codeSection.classList.remove('hidden');
    startButton.classList.remove('hidden');
    noCodeLink.classList.remove('hidden');

    // .login--signup-email 요소 숨김
    const signupEmailLink = document.querySelector('.login--signup-email');
    signupEmailLink.classList.add('hidden');
  }
}


function enableVerificationButton() {
  const phoneInput = document.getElementById('phone');
  const verifyButton = document.getElementById('verify-button');

  phoneInput.addEventListener('keyup', () => {
    phoneNumFormat(phoneInput);

    // 휴대폰 번호 형식이 올바르면 버튼 활성화
    if (phoneInput.value.match(/^\d{3} \d{4} \d{4}$/)) {
      verifyButton.removeAttribute('disabled');
      verifyButton.classList.add('active');
    } else {
      verifyButton.setAttribute('disabled', 'true');
      verifyButton.classList.remove('active');
    }
  });
}

// DOMContentLoaded 이벤트 리스너
document.addEventListener('DOMContentLoaded', () => {
  enableVerificationButton();

  const verifyButton = document.getElementById('verify-button');
  if (verifyButton) {
    verifyButton.addEventListener('click', requestVerification);
  }
});






