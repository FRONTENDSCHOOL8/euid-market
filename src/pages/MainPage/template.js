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

function getDiffSeconds(time1, time2) {
  const productYear = time1.slice(0, 4) * (1000 * 60 * 60 * 24 * 365);
  const nowYear = time2.slice(0, 4) * (1000 * 60 * 60 * 24 * 365);

  const productMonth = time1.slice(5, 7) * (1000 * 60 * 60 * 24 * 30);
  const nowMonth = time2.slice(5, 7) * (1000 * 60 * 60 * 24 * 30);

  const productDay = time1.slice(8, 10) * (1000 * 60 * 60 * 24);
  const nowDay = time2.slice(8, 10) * (1000 * 60 * 60 * 24);

  const productTime = productYear + productMonth + productDay;
  const nowTime = nowYear + nowMonth + nowDay;

  return Math.abs(productTime - nowTime) / 1000;
}

function getUploadTime(time) {
  const curr = new Date().toISOString();

  const diffSeconds = getDiffSeconds(time, curr);

  if (diffSeconds < 60) {
    return '1분전';
  } else if (diffSeconds < 3600) {
    return `${Math.floor(diffSeconds / 60)}분전`;
  } else if (diffSeconds < 3600 * 24) {
    return `${Math.floor(diffSeconds / 3600)}시간전`;
  } else if (diffSeconds < 3600 * 24 * 30) {
    return `${Math.floor(diffSeconds / 3600 / 24)}일전`;
  } else if (diffSeconds < 3600 * 24 * 30 * 12) {
    return `${Math.floor(diffSeconds / 3600 / 24 / 30)}개월전`;
  } else {
    return '오래전';
  }
}

export function productDetailTemplate({ title, type, description, created }) {
  const template = /* html */ `
  <div>
    <h1 class="title">${title}</h1>
      <div>
        <span>${type}</span>
        <span>•</span>
        <span>${getUploadTime(created)}</span>
      </div>
  </div>
  <p>
  ${description}
  </p>
`;

  return template;
}

export function productPriceTemplate({ price }) {
  const template = `
<span class="price">${comma(price)}</span>
`;
  return template;
}

export function userInfoTemplate(item) {
  const template = /* html */ `
  <div class="user-name-container">
            <img
              class="user-profile"
              src="${getPbImageURL(item, 'user_photo')}"
              alt="안보임"
            />
            <div class="user-info-detail">
              <span class="user-name">${item.user_nickname}</span>
              <span class="user-location">응암동</span>
            </div>
          </div>
          <div class="user-temper-container">
            <div class="flex-container">
              <span class="user-temp">${item.user_temperature}℃</span>
              <span class="user-temp-emoji">😀</span>
            </div>
            <span>매너온도</span>
          </div>
          `;
  return template;
}
