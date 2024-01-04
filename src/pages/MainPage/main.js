import data1 from '/src/pages/MainPage/data/data1.json';
import data2 from '/src/pages/MainPage/data/data2.json';
import {
  getNodes,
  insertLast,
  clearContents,
  addClass,
  removeClass,
} from '/src/lib/';
import gsap from 'gsap';

const seniorStory = document.querySelector('.Main-menu-story');
const seniorStoryBoard = document.querySelector('.Main-story-board');

const exchange = document.querySelector('.Main-menu-exchange');
const exchangeBoard = document.querySelector('.Main-exchange');

function onLoad() {
  data1.forEach((item) => {
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
  gsap.from('.story', {
    opacity: 0,
    y: 10,
    stagger: 0.05,
  });
}

onLoad();

function handleExchange() {
  const node = getNodes('.Main-menu-list li');
  const nodes = getNodes('.page-list');

  nodes.forEach((item) => {
    removeClass(item, 'isActive');
  });

  addClass(exchangeBoard, 'isActive');

  node.forEach((item) => {
    removeClass(item, 'isActive');
  });
  addClass(exchange, 'isActive');
  clearContents(exchangeBoard);
  data2.forEach((item) => {
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
  gsap.from('.product', {
    opacity: 0,
    y: 10,
    stagger: 0.1,
  });
}

function handleSeniorStory() {
  const node = getNodes('.Main-menu-list li');
  const nodes = getNodes('.page-list');

  nodes.forEach((item) => {
    removeClass(item, 'isActive');
  });
  addClass(seniorStoryBoard, 'isActive');

  node.forEach((item) => {
    removeClass(item, 'isActive');
  });

  addClass(seniorStory, 'isActive');
  clearContents(seniorStoryBoard);

  data1.forEach((item) => {
    const template = /* html */ `<li class="story">
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

  gsap.from('.story', {
    opacity: 0,
    y: 10,
    stagger: 0.05,
  });
}

seniorStory.addEventListener('click', handleSeniorStory);
exchange.addEventListener('click', handleExchange);
