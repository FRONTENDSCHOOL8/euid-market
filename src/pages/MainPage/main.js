import {
  getNodes,
  getNode,
  insertLast,
  clearContents,
  addClass,
  removeClass,
  attr,
  toggleClass,
} from '/src/lib/';
import pb from '/src/pages/MainPage/pocketbase.js';
import { getPbImageURL } from '/src/pages/MainPage/getPbImage.js';
import gsap from 'gsap';

gsap.defaults({
  ease: 'power2.inOut',
});

const seniorStory = getNode('.Main-menu-story');
const seniorStoryBoard = getNode('.Main-story-board');
const activeButtonList = getNode('.active-button-list');
const exchange = getNode('.Main-menu-exchange');
const exchangeBoard = getNode('.Main-exchange');
const productList = getNode('.Main-product-list');
const plusButton = getNode('.Main-plus-button');
const menuBar = getNode('.Main-menu-bar');

function onLoad() {
  dataLoad('senior_story').then(() => {
    animation('.story');
  });
}

async function dataLoad(data) {
  if (data === 'senior_story') {
    const response = await pb.collection(data).getList();
    const storyData = response.items;

    storyData.forEach((item) => {
      const { title, major, year, name } = item;

      const template = /* html */ `
      <li class="story">
        <a href="/">
          <figure>
            <img src="${getPbImageURL(item)}" alt="안나옴" />
          </figure>
          <figcaption>
            <div class="story-title">
              ${title}
            </div>
            <div>${major} | ${year}기 수강생 ${name}</div>
            </figcaption>
          </a>
      </li>
    `;

      insertLast('.Main-story-board', template);
    });
  } else if (data === 'product_list') {
    const response = await pb.collection(data).getList();
    const productData = response.items;

    productData.forEach((item) => {
      const { title, location, price, state, save } = item;

      let stateClass;
      if (state === '예약중') stateClass = 'book';
      else if (state === '거래 완료') stateClass = 'done';
      else stateClass = '';

      const template = /* html */ `
    <li class="product">
              <a href="/">
                <figure>
                  <img src="${getPbImageURL(item)}" alt="안나옴" />
                </figure>
                <figcaption>
                  <div class="product-title">${title}</div>
                  <div class="product-info-container">
                    <span class="product-location">${location}</span>
                    <span>•</span>
                    <span>1일전</span>
                  </div>
                  <div class="product-state-container">
                    <span class="product-state ${stateClass}">${state}</span>
                    <span>${price}</span>
                  </div>
                </figcaption>
                </a>
                <div class="Main-like-container">
              <button>
                  <img src="/src/assets/icons/main/heart.svg"></img>
                  </button>
                  <span>${save}</span>
                </div>
            </li>
  `;

      insertLast('.Main-product-list', template);
    });
  }
}

function classClear() {
  const menuList = getNodes('.Main-menu-list li');
  const pageList = getNodes('.page-list');
  menuList.forEach((item) => {
    removeClass(item, 'isActive');
  });

  pageList.forEach((item) => {
    removeClass(item, 'isActive');
  });

  removeClass(plusButton, 'isActive');
  removeClass(activeButtonList, 'isActive');
  const whiteURL = '/src/assets/icons/main/plus-white.png';
  attr(plusButton.firstElementChild, 'src', whiteURL);
}

function classAdd(node1, node2) {
  addClass(node1, 'isActive');
  addClass(node2, 'isActive');
}

function activatePage(menuName) {
  const classList = menuName.split(' ');

  if (menuName === 'Main-menu-exchange' && !classList.includes('isActive')) {
    classClear();
    classAdd(exchange, exchangeBoard);
  }

  if (menuName === 'Main-menu-story' && !classList.includes('isActive')) {
    classClear();
    classAdd(seniorStory, seniorStoryBoard);
  }
}

function animation(node) {
  gsap.from(node, {
    opacity: 0,
    y: 10,
    stagger: 0.05,
  });
}

function handleExchange(e) {
  const menuName = e.currentTarget.className;
  activatePage(menuName);
  clearContents(productList);
  dataLoad('product_list').then(() => {
    animation('.product, .Main-plus-button');
  });
}

function handleSeniorStory(e) {
  const menuName = e.currentTarget.className;
  activatePage(menuName);
  clearContents(seniorStoryBoard);
  dataLoad('senior_story').then(() => {
    animation('.story');
  });
}

function handleNavBar() {
  const scrollNum = parseInt(window.scrollY);

  if (scrollNum >= 220) {
    addClass(menuBar, 'fixed');
  } else {
    removeClass(menuBar, 'fixed');
  }
}

function buttonControl() {
  plusButton.addEventListener('mouseover', () => {
    gsap.to('.Main-plus-button', {
      duration: 0.2,
      scale: 1.08,
      y: -5,
    });
  });

  plusButton.addEventListener('mouseout', () => {
    gsap.to('.Main-plus-button', {
      duration: 0.2,
      scale: 1,
      y: 0,
    });
  });

  plusButton.addEventListener('click', () => {
    const whiteURL = '/src/assets/icons/main/plus-white.png';
    const blackURL = '/src/assets/icons/main/plus-black.png';
    if (attr(plusButton.firstElementChild, 'src') === whiteURL) {
      attr(plusButton.firstElementChild, 'src', blackURL);
    } else {
      attr(plusButton.firstElementChild, 'src', whiteURL);
    }
    toggleClass(plusButton, 'isActive');
    toggleClass(activeButtonList, 'isActive');

    if (Array.from(activeButtonList.classList).includes('isActive')) {
      gsap.from('.active-button-list > li', {
        opacity: 0,
        x: 15,
        y: 15,
        stagger: 0.02,
        ease: 'power2.out',
      });
    }
  });
}

onLoad();
seniorStory.addEventListener('click', handleSeniorStory);
exchange.addEventListener('click', handleExchange);
window.addEventListener('scroll', handleNavBar);
buttonControl();
