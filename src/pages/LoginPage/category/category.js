// import PocketBase from 'pocketbase';
import data from './temp_data/data.json';
import { getNode, tiger, insertLast } from '/src/lib';
import { createPost, addClass, removeClass } from './util/dom/index.js';

// 카테고리 리스트 동적 랜더링
async function renderCategory() {
  const response = await tiger.get(
    'http://127.0.0.1:8090/api/collections/category/records'
  );
  const userData = response.data.items;
  userData.forEach((item) => {
    const template = /*html*/ `
    <li type="hidden" class="login--category-card" role="button" tabindex="0">
    <div class="login--category-name">
      <p class="login--category-main paragraph-s">${item.main_category}</p>
      <p class="login--category-sub heading-s">${item.sub_category}</p>
    </div>
    <img src="/src/assets/icons/login/plus.svg" alt="관심분야에 추가" />
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
  });
}

renderCategory();

//검색 이벤트 리스너
document.getElementById('categorySearch').addEventListener('input', (e) => {
  const searchTerm = e.target.value;
  renderCategory(filterCategories(searchTerm));
});

/* -------------- debugging area --------------*/
function extractData() {
  console.log(data);
}

createPost();
extractData();
/*--------------------------------------------*/
