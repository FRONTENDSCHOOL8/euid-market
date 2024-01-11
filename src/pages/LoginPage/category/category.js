import { tiger, insertLast } from '/src/lib';
import plus from '/src/assets/icons/login/plus.svg';
//import PocketBase from 'pocketbase';

// 카테고리 리스트 동적 랜더링
async function renderCategory() {
  const response = await tiger.get(
    `${import.meta.env.VITE_PB_API}/collections/interest_category/records`
  );

  const userData = response.data.items;
  userData.forEach((item) => {
    const template = /*html*/ `
    <li>
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
  document.querySelectorAll('.login--category-card').forEach((card) => {
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
      img.src = this.classList.contains('active-card')
        ? '/src/assets/icons/login/check.svg'
        : '/src/assets/icons/login/plus.svg';
    });
    //
  });
}

renderCategory();
//저장 버튼에 클릭 이벤트 리스너를 추가
document
  .querySelector('.login--category-submit')
  .addEventListener('click', function () {
    // 로컬 스토리지에 selectedCategories 배열을 JSON 문자열로 저장
    localStorage.setItem(
      'selectedCategories',
      JSON.stringify(selectedCategories)
    );
    console.log('저장된 데이터:', localStorage.getItem('selectedCategories'));
  });
//페이지 이동
document
  .querySelector('.login--category-submit')
  .addEventListener('click', function () {
    window.location.href = '/src/pages/LoginPage/signup/';
  });
