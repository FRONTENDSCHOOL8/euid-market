import { tiger, insertLast, getNode, getNodes } from '/src/lib';
import plus from '/src/assets/icons/login/plus.svg';
import check from '/src/assets/icons/login/check.svg';
import gsap from 'gsap';
const card = getNodes('.login--category-card');
//import PocketBase from 'pocketbase';

// 카테고리 리스트 동적 랜더링
async function renderCategory() {
  const response = await tiger.get(
    `${import.meta.env.VITE_PB_API}/collections/interest_category/records`
  );

  const userData = response.data.items;
  userData.forEach((item) => {
    const template = /*html*/ `
    <li >
     <button type="button" class="login--category-card">
      <div class="login--category-name">
       <p class="login--category-main paragraph-s">${item.main_category}</p>
       <p class="login--category-sub heading-s">${item.sub_category}</p>
      </div>
     <img src=${plus} alt="관심분야에 추가" />
     </button>
    </li>
    `;
    insertLast('.login--category-list', template);
  });
  addEventListenersToCards();
}

// 선택된 카테고리 데이터를 저장하는 배열
let selectedCategories = [];

function addEventListenersToCards() {
  getNodes('.login--category-card').forEach((card) => {
    card.addEventListener('click', function () {
      const mainCategory = this.querySelector(
        '.login--category-main'
      ).textContent;
      const subCategory = this.querySelector(
        '.login--category-sub'
      ).textContent;
      const categoryData = {
        mainCategory: mainCategory,
        subCategory: subCategory,
      };

      // 카드 활성화/비활성화 상태 토글
      this.classList.toggle('active-card');

      // 카드가 활성화 상태인지 확인
      if (this.classList.contains('active-card')) {
        selectedCategories.push(categoryData); // 데이터 추가
      } else {
        selectedCategories = selectedCategories.filter(
          (item) =>
            item.mainCategory !== mainCategory ||
            item.subCategory !== subCategory
        ); // 데이터 제거
      }

      console.log(selectedCategories);

      // 조건에 따라 이미지 변경
      const img = this.querySelector('img');
      console.log(this);
      img.src = this.classList.contains('active-card') ? check : plus;
      card;
    });
    //
  });
}

renderCategory();
//저장 버튼에 클릭 이벤트 리스너를 추가
getNode('.login--category-submit').addEventListener('click', function () {
  // 로컬 스토리지에 selectedCategories 배열을 JSON 문자열로 저장
  localStorage.setItem(
    'selectedCategories',
    JSON.stringify(selectedCategories)
  );
  console.log('저장된 데이터:', localStorage.getItem('selectedCategories'));
});
//페이지 이동
getNode('.login--category-submit').addEventListener('click', function () {
  window.location.href = '/src/pages/LoginPage/signup/';
});

// submit 버튼 너비 조정 함수
const buttonWidth = () => {
  // 부모 요소 선택
  const parent = getNode('.login--category-wrapper');
  // 부모 요소의 너비 계산
  const parentWidth = parent.offsetWidth;
  // 버튼 요소 선택
  const button = getNode('.login--category-submit');
  // 버튼의 너비를 부모 요소의 너비로 설정
  button.style.width = `${parentWidth}px`;
};

// 창 크기가 변경될 때마다 버튼 너비 조정
window.addEventListener('resize', buttonWidth);

// 초기 로드 시 버튼 너비 조정
buttonWidth();

// GSAP 애니메이션 인스턴스 생성
const signUpAnimation = gsap.to('.login--category-submit', {
  scale: 1.05,
  duration: 0.2,
  paused: true, // 애니메이션 자동 시작 비활성화
  ease: 'power1.inOut', // 부드러운 이징 효과
});

// 마우스가 요소 위에 있을 때 애니메이션 재생
getNode('.login--category-submit').addEventListener('mouseenter', () => {
  signUpAnimation.play();
});

// 마우스가 요소를 벗어날 때 애니메이션 반전
getNode('.login--category-submit').addEventListener('mouseleave', () => {
  signUpAnimation.reverse();
});
