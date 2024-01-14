import { getNode, setStorage, getStorage } from '/src/lib/';
import { validation, doRandomCode } from '/src/pages/LoginPage/util/';
import PocketBase from 'pocketbase';

// const PASSWORDKEY = 'thsxndlxn';
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
/* -------------------------------------------------------------------------- */
// 인증문자 받기
async function handleCode(e) {
  e.preventDefault();

  try {
    const phoneNum = phoneInput.value;
    const usernames = await fetchUsernames();

    // usernames 배열에 phoneNum이 있는지 확인
    if (usernames.includes(phoneNum)) {
      alert('이미 가입하셨습니다. 로그인하시겠습니까?');
    } else {
      showDialog(randomCode);
      // 생성된 랜덤 코드를 로컬 스토리지에 저장
      await setStorage(phoneNum, randomCode);
    }
  } catch (error) {
    console.error(error); // 에러 로깅
  }
}

// users 컬렉션의 username 필드 데이터 가져오기
async function fetchUsernames() {
  try {
    const records = await pb.collection('users').getFullList();
    const usernames = records.map((record) => record.username);
    return usernames;
  } catch (error) {
    console.error(error);
  }
}

// 중복유저 체크
async function checkUser(phoneNum) {
  try {
    const usernames = await fetchUsernames();
    const phoneNumStr = String(phoneNum);
    // usernames 배열에서 중복유저 확인
    if (usernames.includes(phoneNumStr)) {
      alert('이미 가입하셨습니다');
    } else {
      alert('인증번호 받기');
    }
  } catch (error) {
    console.error('사용자 이름을 확인하는데 실패했습니다:', error);
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
  console.log(codeInput.value);
}
//체크 필요
async function handleSignup(e) {
  e.preventDefault();
  const phoneNum = phoneInput.value;
  const inputCode = codeInput.value;

  try {
    const storedCode = await getStorage(phoneNum);
    const selectedCategory = localStorage.getItem('selectedCategories');
    if (inputCode === storedCode) {
      // 사용자 생성
      await pb.collection('users').create({
        username: 'test',
        email: 'N/A',
        emailVisibility: true,
        password: '1231233',
        passwordConfirm: '1231233',
        user_nickname: 'N/A',
        user_year: 123,
        user_temperature: '36.5',
        user_job: 'N/A',
        user_gender: 'N/A',
        user_age: 123,
        user_organization: 'N/A',
        user_certification: 'N/A',
        user_photo: '/src/assets/icons/login/son2.png',
        selected_category: selectedCategory,
      });

      // 사용자 인증
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
      }
    } else {
      // 코드가 일치하지 않으면 에러 메시지 표시
      codeInput.style.borderColor = 'red';
      errorMessage.classList.remove('hidden');
    }
  } catch (error) {
    alert(error);
    // console.error('회원 가입 처리 중 오류 발생:', error);
  }
}

// 이벤트리스너
phoneInput.addEventListener('input', () => validation(phoneInput, codeButton));
copyButton.addEventListener('click', handleCopy);
closeButton.addEventListener('click', handleClose);
codeButton.addEventListener('click', handleCode);
codeInput.addEventListener('input', handleBtnActive);
startButton.addEventListener('click', handleSignup);
