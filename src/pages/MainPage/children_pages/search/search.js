import { getNode, insertLast, clearContents, sessionHandler } from '/src/lib/';

import { exchangeTemplate } from '/src/pages/MainPage/util/';

import pb from '/src/lib/api/pocketbase.js';

sessionHandler();
const inputBox = getNode('.search-container > input');
const searchList = getNode('.search-list');
const back = getNode('.search-container > img');

async function inputHandler(e) {
  clearContents(searchList);

  const search = await pb.collection('product_list').getFullList({
    filter: `title ~ "${e.target.value}"`,
  });

  if (search.length === 0) {
    clearContents(searchList);
    console.log('없음');
    return;
  }
  search.forEach((item) => {
    insertLast(searchList, exchangeTemplate(item));
  });
}

function debounce(func, delay = 100) {
  let timer = null;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

inputBox.addEventListener('input', debounce(inputHandler));
back.addEventListener('click', () => {
  window.location.href = '/src/pages/MainPage/index.html';
});
