import { getNode, setStorage, getStorage } from '/src/lib/';
import { validation, doRandomCode } from '/src/pages/LoginPage/util/';
import PocketBase from 'pocketbase';

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
/*----------------------------------------------------------------------- */
async function fetchUsernames() {
  try {
    const records = await pb.collection('users').getFullList();
    const usernames = records.map((record) => record.username);
    return usernames;
  } catch (error) {
    console.error(error);
  }
}
// 중복유저 체크 -> 인증문자 받기
async function handleCode(e) {
  e.preventDefault();

  try {
    const phoneNum = phoneInput.value;
    const usernames = await fetchUsernames();

    if (usernames.includes(phoneNum)) {
      alert('이미 가입하셨습니다. 로그인하시겠습니까?');
    } else {
      showDialog(randomCode);
      await setStorage(phoneNum, randomCode);
    }
  } catch (error) {
    console.error(error); // 에러 로깅
  }
}
// codeInput 값이 입력되면 startButton 활성화
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
//유저 생성 및 로그인 진행
async function handleSignup(e) {
  e.preventDefault();
  const phoneNum = phoneInput.value;
  const inputCode = codeInput.value;

  try {
    const storedCode = await getStorage(phoneNum);
    const selectedCategory = localStorage.getItem('selectedCategories');
    if (inputCode === storedCode) {
      await pb.collection('users').create({
        username: phoneNum,
        password: inputCode,
        passwordConfirm: inputCode,
        user_temperature: '36.5',
        user_photo: '/src/assets/icons/login/son2.png',
        selected_category: selectedCategory,
        user_age: 123,
        user_year: 8,
      });
    }

    //사용자 인증
    const authResponse = await pb
      .collection('users')
      .authWithPassword(phoneInput.value, storedCode);

    // 로컬 스토리지에 인증 정보 저장
    if (authResponse) {
      await setStorage('auth', {
        isAuth: true,
        user: authResponse.user,
        token: authResponse.token,
      });
      alert('회원 가입이 완료됐습니다!');
      window.location.href = '/src/pages/Mainpage/';
    }
  } catch {
    // 코드가 일치하지 않으면 에러 메시지 표시
    codeInput.style.borderColor = 'red';
    errorMessage.classList.remove('hidden');
  }
}

// 이벤트리스너
phoneInput.addEventListener('input', () => validation(phoneInput, codeButton));
copyButton.addEventListener('click', handleCopy);
closeButton.addEventListener('click', handleClose);
codeButton.addEventListener('click', handleCode);
codeInput.addEventListener('input', handleBtnActive);
startButton.addEventListener('click', handleSignup);

const temp = await pb.collection('users').getOne('ytlrkv05folf24o');
console.dir(temp);
