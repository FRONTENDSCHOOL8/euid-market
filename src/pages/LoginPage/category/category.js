import { tiger, insertLast, getNode, getNodes } from '/src/lib';
import plus from '/src/assets/icons/login/plus.svg';
import check from '/src/assets/icons/login/check.svg';
import gsap from 'gsap';
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
  handleCards();
}

let selectedCategories = [];

function handleCards() {
  getNodes('.login--category-card').forEach((card) => {
    card.addEventListener('click', function (e) {
      const clickedCard = e.currentTarget;

      const mainCategory = clickedCard.querySelector(
        '.login--category-main'
      ).textContent;
      const subCategory = clickedCard.querySelector(
        '.login--category-sub'
      ).textContent;
      const categoryData = {
        mainCategory: mainCategory,
        subCategory: subCategory,
      };

      // 카드 활성화/비활성화 상태 토글
      clickedCard.classList.toggle('active-card');

      // 카드가 활성화 상태인지 확인
      if (clickedCard.classList.contains('active-card')) {
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
      const img = clickedCard.querySelector('img');
      console.log(clickedCard);
      img.src = clickedCard.classList.contains('active-card') ? check : plus;
    });
  });
}

renderCategory();

function handleSubmit() {
  localStorage.setItem(
    'selectedCategories',
    JSON.stringify(selectedCategories)
  );
  window.location.href = '/src/pages/LoginPage/signup/';
}

// submit 버튼 너비 조정 함수
const buttonWidth = () => {
  const parent = getNode('.login--category-wrapper');
  const parentWidth = parent.offsetWidth;
  const button = getNode('.login--category-submit');
  button.style.width = `${parentWidth}px`;
};

// 창 크기가 변경될 때마다 버튼 너비 조정
window.addEventListener('resize', buttonWidth);
getNode('.login--category-submit').addEventListener('click', handleSubmit);

// 초기 로드 시 버튼 너비 조정
buttonWidth();

// GSAP 애니메이션 인스턴스 생성
const signUpAnimation = gsap.to('.login--category-submit', {
  scale: 1.05,
  duration: 0.2,
  paused: true,
  ease: 'power1.inOut',
});

getNode('.login--category-submit').addEventListener('mouseenter', () => {
  signUpAnimation.play();
});

getNode('.login--category-submit').addEventListener('mouseleave', () => {
  signUpAnimation.reverse();
});
