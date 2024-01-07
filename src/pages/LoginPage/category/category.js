// import PocketBase from 'pocketbase';
import data from './temp_data/data.json';
import { renderTopBar } from '/src/components/general/renderTopBar.js';
import { getNode, tiger, insertLast } from '/src/lib';
import { createPost, addClass, removeClass } from './util/dom/index.js';

const categoryTopBar = document.querySelector('.login--top-bar');
categoryTopBar.innerHTML = renderTopBar();

async function renderCategory() {
  const response = await tiger.get(
    'http://127.0.0.1:8090/api/collections/category/records'
  );
  const userData = response.data.items;
  userData.forEach((item) => {
    const template = /*html*/ `
    <li class="login--category-card">
    <div class="login--category-name">
      <p class="paragraph-s">${item.main_category}</p>
      <p class="heading-s">${item.sub_category}</p>
    </div>
    <img src="/src/assets/icons/login/plus.svg" alt="관심분야에 추가" />
  </li>
    `;
    insertLast('.login--category-list', template);
  });
}

renderCategory();
/* -------------- debugging area --------------*/
function extractData() {
  console.log(data);
}

createPost();
extractData();
/*--------------------------------------------*/

const popUpCloseBtn = getNode('.board--popup-close-btn');
const popUp = getNode('.board--popup-container');
console.log(popUp);
popUpCloseBtn.addEventListener('click', () => addClass(popUp, 'hidden'));

//Category Bar Event Listener Function

function handleCategory(e) {
  e.preventDefault();

  const target = e.target;

  const button = target.closest('button');

  if (!button) return;
  console.log(button);

  // switch 대신 객체를 사용한 방법
  const targetBtn = {
    1: () => removeClass(popUp, 'hidden'),
    2: () => console.log('인기글'),
    3: () => console.log('같이해요'),
    4: () => console.log('질의응답'),
    5: () => console.log('자유게시판'),
  };

  const pickButton = targetBtn[button.dataset.index];
  pickButton();
}

const boardContainer = getNode('.board--category-bar-container');
boardContainer.addEventListener('click', handleCategory);
