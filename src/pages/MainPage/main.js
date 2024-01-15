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
  sessionHandler,
} from '/src/lib/';
import { relocateHREF } from '../BoardPage/util';

// local storage에 사용자가 등록이 안되어있다면 초기 페이지로 이동
sessionHandler();

const seniorStory = getNode('.main--menu-story');
const seniorStoryBoard = getNode('.main--story-board');
const activeButtonList = getNode('.main--active-button-list');
const exchange = getNode('.main--menu-exchange');
const exchangeBoard = getNode('.main--exchange');
const plusButton = getNode('.main--plus-button');
const menuBar = getNode('.main--menu-bar');
const banner = getNode('.main--banner');
const menuList = getNodes('.main--menu-bar button');
const pageList = getNodes('.page-list');
const swiperBanner = getNode('.swiper-wrapper');
const modal = getNode('.modal');

/**
 * 로드하고자하는 데이터의 collection을 배열의 형태로 입력받아 데이터를 프라미스 형태로 반환
 * @param {array} collectionList
 * @returns {array} Promise 객체가 배열안에 포함된 상태로 리턴
 */
function dataLoad(collectionList) {
  const arr = [];

  collectionList.forEach((item) => {
    arr.push(pb.collection(item).getList());
  });

  return arr;
}

/**
 * 노드와 클래스 이름을 입력받아 해당 노드리스트에 ClassName이 있다면 제거하는 함수
 * @param {nodeList} node
 * @param {string} className
 */
function removeAllClass(node, className) {
  {
    node.forEach((item) => {
      removeClass(item, className);
    });
  }
}

/**
 * node 두개를 입력 받아 두 노드를 제외한 모든 노드들의 클래스는 제거하고 두 노드에 클래스를 부여하는 함수
 * @param {node} node1
 * @param {node} node2
 */
function classOn(node1, node2) {
  removeAllClass(menuList, 'isActive');
  removeAllClass(pageList, 'isActive');
  removeClass(plusButton, 'isActive');
  removeClass(activeButtonList, 'isActive');
  attr(plusButton.firstElementChild, 'src', whiteURL);
  addClass(node1, 'isActive');
  addClass(node2, 'isActive');
}

/**
 * 클래스 명을 입력받아 그것에 따라 페이지를 활성화해주는 함수
 * @param {string} menuName
 */
function activatePage(menuName) {
  if (menuName === 'main--menu-exchange') {
    classOn(exchange, exchangeBoard);
  } else if (menuName === 'main--menu-story') {
    classOn(seniorStory, seniorStoryBoard);
  }
}

/**
 * 노드를 입력받아 해당 노드에 애니메이션을 부여하는 함수
 * @param {node} node
 */
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

/**
 * 데이터 구조체와 함수를 입력받아 함수에 따라 node 맨 끝 단에 template을 생성하는 함수
 * @param {Object} data
 * @param {Function} func
 */
function insertList(data, func) {
  if (func === exchangeTemplate) {
    data.forEach((item) => {
      insertLast('.main--product-list', func(item));
    });
  } else if (func === storyBoardTemplate) {
    data.forEach((item) => {
      insertLast('.main--story-board', func(item));
    });
  }
}

/**
 * 스크롤에 따라 네비게이션바와 배경에 움직임을 주는 함수
 */
function handleScroll() {
  const scrollNum = parseInt(window.scrollY);

  if (scrollNum >= 228) {
    addClass(menuBar, 'fixed');
  } else {
    removeClass(menuBar, 'fixed');

    banner.style.transform = `translateY(${-window.scrollY / 2.5}px)`;
  }
}

/**
 * 버튼이 호버되고 클릭되었을 때의 움직임을 컨트롤하는 함수
 */
function buttonControl() {
  /**
   * 버튼을 클릭하면 이미지의 URL을 교체해주는 함수
   */
  function changeButtonColor() {
    if (attr(plusButton.firstElementChild, 'src') === whiteURL) {
      attr(plusButton.firstElementChild, 'src', blackURL);
    } else {
      attr(plusButton.firstElementChild, 'src', whiteURL);
    }
  }

  plusButton.addEventListener('mouseover', () => {
    gsap.fromTo(
      '.main--plus-button',
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
      '.main--plus-button',
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
    toggleClass(modal, 'isActive');

    gsap.fromTo(
      '.modal',
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );
    gsap.fromTo(
      '.main--active-button-list > li',
      {
        background: 'var(--primary)',
        borderRadius: 0,
      },
      {
        background: 'var(--background)',
        borderRadius: 50,
      },
      '<'
    );
    gsap.fromTo(
      '.main--active-button-list > li > a',
      {
        color: 'var(--background)',
      },
      {
        color: 'var(--primary)',
      },
      '<'
    );

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

/**
 * 이벤트 위임 방식으로 menu바가 클릭되었을 때 페이지를 바꿔주는 함수
 * @param {Object} e
 * @returns
 */
function handleMenuBar(e) {
  const target = e.target;
  const menu = target.closest('button');

  if (!menu) return;
  const menuName = menu.className;

  if (menuName === 'main--menu-QnA') {
    relocateHREF("/src/pages/BoardPage/");
  } else if (menuName === 'main--menu-together') {
    relocateHREF("/src/pages/BoardPage/");
  } else {
    activatePage(menuName);

    if (menuName === 'main--menu-exchange') {
      animation('.main--product');
    } else if (menuName === 'main--menu-story') {
      animation('.main--story');
    }
  }
}

(async () => {
  const [senior, product] = await Promise.all(
    dataLoad(['senior_story', 'product_list'])
  );

  /**
   * 페이지가 로딩되었을 때 데이터베이스에서 정보들을 불러와 화면에 출력하는 함수
   */
  function onLoad() {
    insertLast(swiperBanner, swiperTemplate());

    const seniorData = senior.items;
    const productData = product.items;

    insertList(seniorData, storyBoardTemplate);
    insertList(productData, exchangeTemplate);
    loadingComplete(['.main--story-image', '.main--product-image']);
    animation('.main--story');
  }

  renderNavBar();
  onLoad();
  menuBar.addEventListener('click', handleMenuBar);
  window.addEventListener('scroll', handleScroll);
  buttonControl();
})();
