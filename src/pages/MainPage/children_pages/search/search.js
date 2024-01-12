import { getNode, insertLast, clearContents } from '/src/lib/';
import pb from '/src/lib/api/pocketbase.js';
import { exchangeTemplate } from '/src/pages/MainPage/util/';

const inputBox = getNode('.search-container > input');
const searchList = getNode('.search-list');
const back = getNode('.search-container > img');

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

async function inputHandler(e) {
  clearContents(searchList);
  if (e.target.value === '') {
    clearContents(searchList);
  } else {
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
}

inputBox.addEventListener('input', debounce(inputHandler));
back.addEventListener('click', () => {
  window.location.href = '/src/pages/MainPage/index.html';
});
