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

import {
  storyBoardTemplate,
  exchangeTemplate,
} from '/src/pages/MainPage/template.js';

// Gsap default 설정
import gsap from 'gsap';
gsap.defaults({
  ease: 'power2.inOut',
});

import pb from '/src/lib/api/pocketbase.js';

// build를 위한 정적이미지 변수
import whiteURL from '/src/assets/icons/main/plus-white.png';
import blackURL from '/src/assets/icons/main/plus-black.png';

import { renderNavBar } from '/src/components/general/index.js';

const seniorStory = getNode('.Main-menu-story');
const seniorStoryBoard = getNode('.Main-story-board');
const activeButtonList = getNode('.active-button-list');
const exchange = getNode('.Main-menu-exchange');
const exchangeBoard = getNode('.Main-exchange');
const productList = getNode('.Main-product-list');
const plusButton = getNode('.Main-plus-button');
const menuBar = getNode('.Main-menu-bar');
const banner = getNode('.Main-banner');

function dataLoad() {
  return [
    pb.collection('senior_story').getList(),
    pb.collection('product_list').getList(),
  ];
}

(async () => {
  const [senior, product] = await Promise.all(dataLoad());

  const seniorData = senior.items;
  const productData = product.items;

  function onLoad() {
    seniorData.forEach((item) => {
      insertLast('.Main-story-board', storyBoardTemplate(item));
    });
    animation('.story');
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

  function insertList(data, func) {
    if (func === exchangeTemplate) {
      data.forEach((item) => {
        insertLast('.Main-product-list', func(item));
      });
    } else if (func === storyBoardTemplate) {
      data.forEach((item) => {
        insertLast('.Main-story-board', func(item));
      });
    }
  }

  function handleExchange(e) {
    const menuName = e.currentTarget.className;
    activatePage(menuName);
    clearContents(productList);
    insertList(productData, exchangeTemplate);
    animation('.product');
  }

  function handleSeniorStory(e) {
    const menuName = e.currentTarget.className;
    activatePage(menuName);
    clearContents(seniorStoryBoard);
    insertList(seniorData, storyBoardTemplate);
    animation('.story');
  }

  function handleScroll() {
    const scrollNum = parseInt(window.scrollY);

    if (scrollNum >= 220) {
      addClass(menuBar, 'fixed');
    } else {
      removeClass(menuBar, 'fixed');

      banner.style.transform = `translateY(${-window.scrollY / 2.5}px)`;
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

  renderNavBar();
  onLoad();
  seniorStory.addEventListener('click', handleSeniorStory);
  exchange.addEventListener('click', handleExchange);
  window.addEventListener('scroll', handleScroll);
  buttonControl();
})();
