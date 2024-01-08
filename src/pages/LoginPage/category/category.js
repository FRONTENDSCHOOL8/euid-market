// import PocketBase from 'pocketbase';
import data from './temp_data/data.json';
import { getNode, tiger, insertLast } from '/src/lib';
import { createPost, addClass, removeClass } from './util/dom/index.js';

// 카테고리 리스트 동적 랜더링
async function renderCategory(filteredData = null) {
  let userData;
  if (filteredData) {
    userData = filteredData;
  } else {
    const response = await tiger.get(
      'http://127.0.0.1:8090/api/collections/category/records'
    );
    userData = response.data.items;
  }

  // 기존 카드들을 삭제하고 새로운 데이터로 랜더링
  const categoryList = document.querySelector('.login--category-list');
  categoryList.innerHTML = '';
  // ... (나머지 코드는 동일)
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
//카테고리 데이터 필터링 함수
function filterCategories(searchTerm) {
  return data.items.filter(
    (item) =>
      item.main_category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sub_category.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

function addEventListenersToCards() {
  //이벤트리스너
  document.querySelectorAll('.login--category-card').forEach((card) => {
    card.addEventListener('click', function () {
      this.classList.toggle('active-card');
      // 클릭된 카드의 데이터 추출
      const mainCategory = this.querySelector(
        '.login--category-main'
      ).textContent;
      const subCategory = this.querySelector(
        '.login--category-sub'
      ).textContent;
      const categoryData = `Main Category: ${mainCategory}, Sub Category: ${subCategory}`;
      console.log(
        `Main Category: ${mainCategory}, Sub Category: ${subCategory}`
      );

      // 조건에 따라 이미지 변경
      const img = this.querySelector('img');
      if (this.classList.contains('active-card')) {
        img.src = '/src/assets/icons/login/check.svg'; // 활성화 이미지
      } else {
        img.src = '/src/assets/icons/login/plus.svg'; // 비활성화 이미지
      }
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
