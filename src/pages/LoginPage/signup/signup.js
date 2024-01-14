import { getNode, setStorage, getStorage } from '/src/lib/';
import PocketBase from 'pocketbase';

// const PASSWORDKEY = 'thsxndlxn';
const pb = new PocketBase(import.meta.env.VITE_PB_URL); // 로컬주소 가져와서 pb 객체 생성
const phoneInput = getNode('#phone');
const codeButton = getNode('#codeButton');
const codeInput = getNode('#codeInput');
const startButton = getNode('#start-button');
const errorMessage = getNode('#error-message');
// const randomCode = generateRandomCode();

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
/* -------------------------------------------------------------------------- */
/*                         인증문자 받기 버튼 이벤트 처리                            */
/* -------------------------------------------------------------------------- */
async function handleCode(e) {
  e.preventDefault();

  try {
    const phoneNum = phoneInput.value;
    const usernames = await fetchUsernames();

    // usernames 배열에 phoneNum이 있는지 확인
    if (usernames.includes(phoneNum)) {
      alert('이미 가입하셨습니다. 로그인하시겠습니까?');
    } else {
      // 랜덤 코드 생성 및 다이얼로그 표시
      const randomCode = generateRandomCode();
      showDialog(randomCode);

      // 생성된 랜덤 코드를 로컬 스토리지에 저장
      await setStorage(phoneNum, randomCode);
    }
  } catch (error) {
    console.error(error); // 에러 로깅
  }
}

/* -------------------------------------------------------------------------- */
/*    users 컬렉션의 username 필드 데이터만 가져오기. -> 배열                          */
/* -------------------------------------------------------------------------- */
async function fetchUsernames() {
  try {
    // users 컬렉션에서 모든 레코드 가져오기
    const records = await pb.collection('users').getFullList();

    // 각 레코드에서 username 필드만 추출
    const usernames = records.map((record) => record.username);

    // usernames 반환
    return usernames;
  } catch (error) {
    console.error('데이터를 가져오는데 실패했습니다:', error);
    return [];
  }
}

// usernames을 가져와서 처리하는 예
fetchUsernames().then((usernames) => {
  console.log('Username 목록:', usernames);
});
/* -------------------------------------------------------------------------- */
/*         중복유저 체크 :가져온 데이터와 폰번호 일치여부 확인                   */
/* -------------------------------------------------------------------------- */
async function checkUserExists(phoneNum) {
  try {
    const usernames = await fetchUsernames();

    // phoneNum을 문자열로 변환
    const phoneNumStr = String(phoneNum);

    // usernames 배열에 phoneNumStr이 있는지 확인
    if (usernames.includes(phoneNumStr)) {
      alert('이미 가입하셨습니다');
    } else {
      alert('인증번호 받기');
    }
  } catch (error) {
    console.error('사용자 이름을 확인하는데 실패했습니다:', error);
  }
}

/* -------------------------------------------------------------------------- */
/*                                      -                                     */
/* -------------------------------------------------------------------------- */
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

codeButton.addEventListener('click', handleCode);

/* -------------------------------------------------------------------------- */
/*         지금 작업중이 핸들사인업 이벤트리스너 함수                                    */
/* -------------------------------------------------------------------------- */

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

startButton.addEventListener('click', handleSignup);
