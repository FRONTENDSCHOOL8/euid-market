import { getPbImageURL, comma } from '/src/lib/';
import heart from '/src/assets/icons/main/heart.svg';

export function storyBoardTemplate(item) {
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

  return template;
}

export function exchangeTemplate(item) {
  const { title, location, price, state, save } = item;

  let stateClass;
  if (state === '예약중') stateClass = 'book';
  else if (state === '거래 완료') stateClass = 'done';
  else stateClass = '';

  const template = /* html */ `
    <li class="product">
              <a href="${`/src/pages/MainPage/detail/index#${item.id}`}">
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
                    <span>${comma(price)}원</span>
                  </div>
                </figcaption>
                </a>
                <div class="Main-like-container">
              <button>
                  <img src="${heart}"></img>
                  </button>
                  <span>${save}</span>
                </div>
            </li>
  `;

  return template;
}

export function productDetailTemplate(item) {
  const template = /* html */ `
  <div>
    <h1 class="title">${item.title}</h1>
      <div>
        <span>${item.type}</span>
        <span>•</span>
        <span>17분전</span>
      </div>
  </div>
  <p>
  ${item.description}
  </p>
`;

  return template;
}

export function productPriceTemplate(item) {
  const template = `
<span class="price">${comma(item.price)}</span>
`;
  return template;
}
