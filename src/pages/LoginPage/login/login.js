import { getNode } from '/src/lib/';
import PocketBase from 'pocketbase';

const pw = 'sonson22';
const pb = new PocketBase(import.meta.env.VITE_PB_URL); // 로컬주소 가져와서 pb 객체 생성
const phoneInput = getNode('#phone');
const codeButton = getNode('#codeButton');

//11자리 숫자가 입력되면 버튼 활성화
phoneInput.addEventListener('input', function () {
  const phoneNumber = phoneInput.value;

  // 입력된 값이 11자리 숫자인지 확인
  if (phoneNumber.length === 11 && /^\d+$/.test(phoneNumber)) {
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
});

async function handleCode(e) {
  e.preventDefault();

  try {
    const phoneNum = phoneInput.value;

    const userData = await pb
      .collection('users2')
      .authWithPassword(phoneNum, pw);
    //포켓베이스자체에서 검증을해서 유저가 맞으면 다음 권한을 넘겨줌.
  } catch {
    alert('error!');
  }
  // console.log(userData);
}

codeButton.addEventListener('click', handleCode);
