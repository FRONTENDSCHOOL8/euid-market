import { getNode, setStorage, getStorage } from '/src/lib/';
// import { validation, doRandomCode } from '/src/pages/LoginPage/util/';
import PocketBase from 'pocketbase';

const PASSWORDKEY = 'thsxndlxn';
const pb = new PocketBase(import.meta.env.VITE_PB_URL); // 로컬주소 가져와서 pb 객체 생성
const phoneInput = getNode('#phone');
const codeButton = getNode('#codeButton');
const codeInput = getNode('#codeInput');
const startButton = getNode('#start-button');
const errorMessage = getNode('#error-message');
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

// 랜덤한 문자와 숫자 조합을 생성하는 함수
function generateRandomCode() {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// 다이얼로그를 표시하는 함수
function showDialog(randomCode) {
  const codeText = getNode('#code-text');
  codeText.textContent = randomCode;
  const dialog = getNode('#code-dialog');
  dialog.showModal();
}

// '복사하기' 버튼에 대한 이벤트 리스너 설정
getNode('#copy-button').addEventListener('click', function (e) {
  e.preventDefault(); // 폼 제출을 방지합니다.

  const codeText = getNode('#code-text').textContent;
  navigator.clipboard.writeText(codeText).then(() => {
    getNode('#code-dialog').close(); // 다이얼로그를 닫습니다.
  });
});

// '닫기' 버튼에 대한 이벤트 리스너 설정
getNode('#close-button').addEventListener('click', function () {
  getNode('#code-dialog').close();
});

async function handleCode(e) {
  e.preventDefault();

  try {
    const phoneNum = phoneInput.value;

    const userData = await pb
      .collection('users')
      .authWithPassword(phoneNum, PASSWORDKEY);
    //포켓베이스자체에서 검증을해서 유저가 맞으면 다음 권한을 넘겨줌.

    // 랜덤 코드 생성 및 다이얼로그 표시
    const randomCode = generateRandomCode();
    showDialog(randomCode);
    // 생성된 랜덤 코드를 로컬 스토리지에 저장
    const state = await setStorage(phoneNum, randomCode);

    console.log(userData);
  } catch (error) {
    alert('회원이 아닙니다. 회원가입하시겠어요?');
    console.error(error); // 에러 로깅
  }
}

codeButton.addEventListener('click', handleCode);

// codeInput 값이 입력되면 startButton 활성화
codeInput.addEventListener('input', function (e) {
  e.preventDefault();
  if (codeInput.value.length > 0) {
    startButton.classList.add('login--start-active');
    startButton.disabled = false;
  } else {
    startButton.classList.remove('login--start-active');
    startButton.disabled = true;
  }
  console.log(codeInput.value);
});

// startButton 클릭 이벤트 리스너

startButton.addEventListener('click', async function (e) {
  e.preventDefault();
  const inputCode = codeInput.value;

  // 사용자 입력 값 로그 출력
  console.log('입력된 코드:', inputCode);

  try {
    const storedCode = await getStorage(phoneInput.value);

    // 저장된 값 로그 출력
    console.log('저장된 코드:', storedCode);

    if (inputCode == storedCode) {
      const { model, token } = await getStorage('pocketbase_auth');

      setStorage('auth', {
        isAuth: !!model,
        user: model,
        token: token,
      });
      const { localStorage } = window;
      localStorage.setItem('session', 'logged_in');
      window.location.href = '/src/pages/Mainpage/';
    } else {
      // 코드가 일치하지 않으면 에러 메시지 표시
      codeInput.style.borderColor = 'red';
      errorMessage.classList.remove('hidden');
    }
  } catch (error) {
    console.error(error);
  }
});

// const { localStorage } = window;
// localStorage.setItem('session', 'logged_in');
