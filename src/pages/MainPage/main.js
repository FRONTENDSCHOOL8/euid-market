// build를 위한 정적이미지 변수
import whiteURL from '/src/assets/icons/main/plus-white.png';
import blackURL from '/src/assets/icons/main/plus-black.png';

// Gsap default 설정
import gsap from 'gsap';
gsap.defaults({
  ease: 'power2.inOut',
});

// 하단 네비게이션바 랜더링
import { renderNavBar } from '/src/components/general/index.js';

// HTML 템플릿 함수
import {
  storyBoardTemplate,
  exchangeTemplate,
  swiperTemplate,
} from '/src/pages/MainPage/util/';

import pb from '/src/lib/api/pocketbase.js';

import {
  getNodes,
  getNode,
  insertLast,
  addClass,
  removeClass,
  attr,
  toggleClass,
  loadingComplete,
} from '/src/lib/';

const seniorStory = getNode('.main--menu-story');
const seniorStoryBoard = getNode('.main--story-board');
const activeButtonList = getNode('.main--active-button-list');
const exchange = getNode('.main--menu-exchange');
const exchangeBoard = getNode('.Main-exchange');
const plusButton = getNode('.Main-plus-button');
const menuBar = getNode('.Main-menu-bar');
const banner = getNode('.main--banner');
const menuList = getNodes('.Main-menu-list li');
const pageList = getNodes('.page-list');
const swiperBanner = getNode('.swiper-wrapper');

(async () => {
  const [senior, product] = await Promise.all(
    dataLoad(['senior_story', 'product_list'])
  );

  function onLoad() {
    insertLast(swiperBanner, swiperTemplate());

    const seniorData = senior.items;
    const productData = product.items;

    insertList(seniorData, storyBoardTemplate);
    insertList(productData, exchangeTemplate);
    loadingComplete(['.main--story-image', '.main--product-image']);
    animation('.main--story');
  }

  function dataLoad(collectionList) {
    const arr = [];

    collectionList.forEach((item) => {
      arr.push(pb.collection(item).getList());
    });

    return arr;
  }

  function removeAllClass(node, className) {
    {
      node.forEach((item) => {
        removeClass(item, className);
      });
    }
  }

  function classOn(node1, node2) {
    removeAllClass(menuList, 'isActive');
    removeAllClass(pageList, 'isActive');
    removeClass(plusButton, 'isActive');
    removeClass(activeButtonList, 'isActive');
    attr(plusButton.firstElementChild, 'src', whiteURL);
    addClass(node1, 'isActive');
    addClass(node2, 'isActive');
  }

  function activatePage(menuName) {
    if (menuName === 'main--menu-exchange') {
      classOn(exchange, exchangeBoard);
    } else if (menuName === 'main--menu-story') {
      classOn(seniorStory, seniorStoryBoard);
    }
  }

  function animation(node) {
    gsap.fromTo(
      node,
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.04,
      }
    );
  }

  function insertList(data, func) {
    if (func === exchangeTemplate) {
      data.forEach((item) => {
        insertLast('.Main-product-list', func(item));
      });
    } else if (func === storyBoardTemplate) {
      data.forEach((item) => {
        insertLast('.main--story-board', func(item));
      });
    }
  }

  function handleExchange(e) {
    const menuName = e.currentTarget.className;
    activatePage(menuName);
    animation('.main--product');
  }

  function handleSeniorStory(e) {
    const menuName = e.currentTarget.className;
    activatePage(menuName);
    animation('.main--story');
  }

  function handleScroll() {
    const scrollNum = parseInt(window.scrollY);

    if (scrollNum >= 228) {
      addClass(menuBar, 'fixed');
    } else {
      removeClass(menuBar, 'fixed');

      banner.style.transform = `translateY(${-window.scrollY / 2.5}px)`;
    }
  }

  function buttonControl() {
    plusButton.addEventListener('mouseover', () => {
      gsap.fromTo(
        '.Main-plus-button',
        {
          scale: 1,
          y: 0,
        },
        {
          duration: 0.2,
          scale: 1.08,
          y: -5,
        }
      );
    });

    plusButton.addEventListener('mouseout', () => {
      gsap.fromTo(
        '.Main-plus-button',
        {
          scale: 1.08,
          y: -5,
        },
        {
          duration: 0.2,
          scale: 1,
          y: 0,
        }
      );
    });

    plusButton.addEventListener('click', () => {
      changeButtonColor();
      toggleClass(plusButton, 'isActive');
      toggleClass(activeButtonList, 'isActive');

      if (Array.from(activeButtonList.classList).includes('isActive')) {
        gsap.fromTo(
          '.main--active-button-list > li',
          {
            opacity: 0,
            x: 15,
            y: 15,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            stagger: 0.02,
            ease: 'power2.out',
          }
        );
      }
    });
  }

  function changeButtonColor() {
    if (attr(plusButton.firstElementChild, 'src') === whiteURL) {
      attr(plusButton.firstElementChild, 'src', blackURL);
    } else {
      attr(plusButton.firstElementChild, 'src', whiteURL);
    }
  }

  renderNavBar();
  onLoad();
  seniorStory.addEventListener('click', handleSeniorStory);
  exchange.addEventListener('click', handleExchange);
  window.addEventListener('scroll', handleScroll);
  buttonControl();
})();
