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
// async function checkUser(phoneNum) {
//   try {
//     const usernames = await fetchUsernames();
//     const phoneNumStr = String(phoneNum);
//     if (usernames.includes(phoneNumStr)) {
//     로그인시작->인증번호받기
//     } else {
//       alert('회원가입할래?');
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

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
// 인증문자 받기
async function handleCode(e) {
  e.preventDefault();

  try {
    const phoneNum = phoneInput.value;

    const userData = await pb
      .collection('users')
      .authWithPassword(phoneNum, PASSWORDKEY);
    //포켓베이스자체에서 검증을해서 유저가 맞으면 다음 권한을 넘겨줌.

    // 랜덤 코드 생성 및 다이얼로그 표시
    const randomCode = doRandomCode();
    showDialog(randomCode);
    // 생성된 랜덤 코드를 로컬 스토리지에 저장
    const state = await setStorage(phoneNum, randomCode);

    console.log(userData);
  } catch (error) {
    alert('회원이 아닙니다. 회원가입하시겠어요?');
    console.error(error); // 에러 로깅
  }
}
// startButton 클릭 이벤트 리스너

startButton.addEventListener('click', async function (e) {
  e.preventDefault();
  const inputCode = codeInput.value;
  const phoneNum = phoneInput.value;
  // 사용자 입력 값 로그 출력
  console.log('입력된 코드:', inputCode);

  try {
    const storedCode = await getStorage(phoneNum);
    console.log(phoneNum);
    // 저장된 값 로그 출력
    console.log('저장된 코드:', storedCode);

    if (inputCode == storedCode) {
      const { model, token } = await getStorage('pocketbase_auth');

      setStorage('auth', {
        isAuth: !!model,
        user: model,
        token: token,
      });
      // 코드가 일치하면 다른 페이지로 이동
      window.location.href = '/src/pages/Mainpage/';
    } else {
      // 코드가 일치하지 않으면 에러 메시지 표시
      codeInput.style.borderColor = 'red';
      errorMessage.classList.remove('hidden');
    }
  } catch (error) {
    console.error('getStorage 함수에서 오류 발생:', error);
  }
});

// 이벤트리스너
phoneInput.addEventListener('input', () => validation(phoneInput, codeButton));
codeButton.addEventListener('click', handleCode);
