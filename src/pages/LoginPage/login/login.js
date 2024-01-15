import { getNode, setStorage, getStorage } from '/src/lib/';
import { validation, doRandomCode } from '/src/pages/LoginPage/util/';
import PocketBase from 'pocketbase';

const PASSWORDKEY = 'thsxndlxn';
const pb = new PocketBase(import.meta.env.VITE_PB_URL);
const phoneInput = getNode('#phone');
const codeButton = getNode('#codeButton');
const codeInput = getNode('#codeInput');
const startButton = getNode('#start-button');
const errorMessage = getNode('#error-message');
const copyButton = getNode('#copy-button');
const closeButton = getNode('#close-button');
const randomCode = doRandomCode();

// 다이얼로그 표시
function showDialog(randomCode) {
  const codeText = getNode('#code-text');
  codeText.textContent = randomCode;
  const dialog = getNode('#code-dialog');
  dialog.showModal();
}

// 다이얼로그 코드 복사
function handleCopy(e) {
  e.preventDefault();
  const codeText = getNode('#code-text').textContent;
  navigator.clipboard.writeText(codeText).then(() => {
    getNode('#code-dialog').close();
  });
}
// 다이얼로그 닫기
function handleClose() {
  getNode('#code-dialog').close();
}
//유저 체크 -> 인증문자 받기
async function handleCode(e) {
  e.preventDefault();

  try {
    const phoneNum = phoneInput.value;
    await pb.collection('users').authWithPassword(phoneNum, PASSWORDKEY);

    showDialog(randomCode);
    // 생성된 랜덤 코드를 로컬 스토리지에 저장
    await setStorage(phoneNum, randomCode);
  } catch (error) {
    alert('회원이 아닙니다. 회원가입하시겠어요?');
    console.error(error);
  }
}

// 인증번호 입력 -> startButton 활성화
function handleBtnActive(e) {
  e.preventDefault();
  if (codeInput.value.length > 0) {
    startButton.classList.add('login--start-active');
    startButton.disabled = false;
  } else {
    startButton.classList.remove('login--start-active');
    startButton.disabled = true;
  }
}

// 로그인 진행
async function handleLogin(e) {
  e.preventDefault();
  const inputCode = codeInput.value;

  try {
    const storedCode = await getStorage(phoneInput.value);

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
      codeInput.style.borderColor = 'red';
      errorMessage.classList.remove('hidden');
    }
  } catch (error) {
    console.error(error);
  }
}

phoneInput.addEventListener('input', () => validation(phoneInput, codeButton));
copyButton.addEventListener('click', handleCopy);
closeButton.addEventListener('click', handleClose);
codeButton.addEventListener('click', handleCode);
codeInput.addEventListener('input', handleBtnActive);
startButton.addEventListener('click', handleLogin);
