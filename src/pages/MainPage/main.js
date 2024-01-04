import data1 from '/src/pages/MainPage/data/data1.json';
import data2 from '/src/pages/MainPage/data/data2.json';
import {
  getNodes,
  getNode,
  insertLast,
  clearContents,
  addClass,
  removeClass,
} from '/src/lib/';
import gsap from 'gsap';

gsap.defaults({
  ease: 'power2.inOut',
});

const seniorStory = getNode('.Main-menu-story');
const seniorStoryBoard = getNode('.Main-story-board');

const exchange = getNode('.Main-menu-exchange');
const exchangeBoard = getNode('.Main-exchange');

const menuBar = getNode('.Main-menu-bar');

function onLoad() {
  dataLoad(data1);
  animation('.story');
}

function dataLoad(data) {
  if (data === data1) {
    data.forEach((item) => {
      const template = /* html */ `
      <li class="story">
        <a href="/">
                <figure>
                  <img src=${item.img} alt="" />
                </figure>
                <figcaption>
                  <div class="story-title">
                    ${item.title}
                  </div>
                  <div>${item.category} | ${item.name}</div>
                </figcaption>
                </a>
              </li>
    `;

      insertLast('.Main-story-board', template);
    });
  } else if (data === data2) {
    data.forEach((item) => {
      const template = /* html */ `
    <li class="product">
              <a href="/">
                <figure>
                  <img src=${item.img} alt="" />
                </figure>
                <figcaption>
                  <div class="product-title">${item.title}</div>
                  <div class="product-info-container">
                    <span class="product-location">${item.location}</span>
                    <span>•</span>
                    <span>${item.time}</span>
                  </div>
                  <div class="product-state-container">
                    <span class="product-state">${item.state}</span>
                    <span>${item.price}</span>
                  </div>
                </figcaption>
              </a>
            </li>
  `;

      insertLast('.Main-exchange', template);
    });
  }
}

function classClear(node1, node2) {
  node1.forEach((item) => {
    removeClass(item, 'isActive');
  });

  node2.forEach((item) => {
    removeClass(item, 'isActive');
  });
}

function classAdd(node1, node2) {
  addClass(node1, 'isActive');
  addClass(node2, 'isActive');
}

function activatePage(menuName) {
  const classList = menuName.split(' ');
  const menuList = getNodes('.Main-menu-list li');
  const pageList = getNodes('.page-list');

  if (menuName === 'Main-menu-exchange' && !classList.includes('isActive')) {
    classClear(menuList, pageList);
    classAdd(exchange, exchangeBoard);
  }

  if (menuName === 'Main-menu-story' && !classList.includes('isActive')) {
    classClear(menuList, pageList);
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
  clearContents(exchangeBoard);
  dataLoad(data2);
  animation('.product');
}

function handleSeniorStory(e) {
  const menuName = e.currentTarget.className;
  activatePage(menuName);
  clearContents(seniorStoryBoard);
  dataLoad(data1);
  animation('.story');
}

function handleNavBar() {
  const scrollNum = parseInt(window.scrollY);

  console.log(scrollNum);

  if (scrollNum >= 220) {
    addClass(menuBar, 'fixed');
  } else {
    removeClass(menuBar, 'fixed');
  }
}

onLoad();
seniorStory.addEventListener('click', handleSeniorStory);
exchange.addEventListener('click', handleExchange);
window.addEventListener('scroll', handleNavBar);
