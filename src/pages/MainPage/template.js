import { getPbImageURL, comma, getUploadTime } from '/src/lib/';
import heart from '/src/assets/icons/main/heart.svg';
import banner1 from '/src/assets/banner1.png';
import banner2 from '/src/assets/banner2.png';
import banner3 from '/src/assets/banner3.png';

export function storyBoardTemplate(item) {
  const { title, major, year, name } = item;

  const template = /* html */ `
      <li class="story">
        <a href="/">
          <figure>
            <img class="story-image" src="${getPbImageURL(
              item
            )}" alt="안나옴" />
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
                  <img class="product-image" src="${getPbImageURL(
                    item
                  )}" alt="안나옴" />
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

export function swiperTemplate() {
  const template = /* html */ `
  <div class="swiper-slide">
                <div class="banner-container">
                  <h3>
                    <span>풀리지 않는 버그 속</span>
                    <span>개발자로 살아남기</span>
                    <a
                      href="/"
                      aria-label="풀리지 않는 버그 속에서 개발자가 살아남는 방법 확인하러가기"
                      >자세히 보기</a
                    >
                  </h3>
                  <div>
                    <span>01</span>
                    <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="41"
                        height="2"
                        viewBox="0 0 41 2"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_238_3875)">
                          <rect y="0.5" width="41" height="1" fill="white" />
                          <rect y="0.5" width="9" height="1" fill="white" />
                        </g>
                        <defs>
                          <clipPath id="clip0_238_3875">
                            <rect
                              width="41"
                              height="1"
                              fill="white"
                              transform="translate(0 0.5)"
                            />
                          </clipPath>
                        </defs></svg
                    ></span>
                    <span>03</span>
                  </div>
                  <img class="banner1" src=${banner1} alt="" />
                </div>
              </div>
              <div class="swiper-slide">
                <div class="banner-container">
                  <h3>
                    <span>HTML, CSS 정복은</span>
                    <span><strong>슬비쌤</strong>과 함께</span>
                    <a
                      href="https://yamoo9.github.io/front-end-master/lecture/sass-intro.html"
                      aria-label="슬비쌤의 HTML, CSS 강의 확인하러가기"
                      >자세히 보기</a
                    >
                  </h3>
                  <div>
                    <span>02</span>
                    <span
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="41"
                        height="2"
                        viewBox="0 0 41 2"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_238_3875)">
                          <rect y="0.5" width="41" height="1" fill="white" />
                          <rect y="0.5" width="9" height="1" fill="white" />
                        </g>
                        <defs>
                          <clipPath id="clip0_238_3875">
                            <rect
                              width="41"
                              height="1"
                              fill="white"
                              transform="translate(0 0.5)"
                            />
                          </clipPath>
                        </defs></svg
                    ></span>
                    <span>03</span>
                  </div>
                  <img
                    class="banner2"
                    src=${banner2}
                    alt="배너 이미지"
                  />
                </div>
              </div>
              <div class="swiper-slide">
                <div class="banner-container">
                  <h3>
                    <span>GSAP 조심해</span>
                    <span><strong>범쌤</strong>이 너 부셔버린데 </span>
                    <a
                      href="https://www.inflearn.com/course/%EC%9B%B9-%EC%95%A0%EB%8B%88%EB%A7%A4%EC%9D%B4%EC%85%98-gsap-1"
                      aria-label="범쌤의 GSAP강의 확인하러가기"
                      >자세히 보기</a
                    >
                  </h3>
                  <div>
                    <span>03</span>
                    <span
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="41"
                        height="2"
                        viewBox="0 0 41 2"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_238_3875)">
                          <rect y="0.5" width="41" height="1" fill="white" />
                          <rect y="0.5" width="9" height="1" fill="white" />
                        </g>
                        <defs>
                          <clipPath id="clip0_238_3875">
                            <rect
                              width="41"
                              height="1"
                              fill="white"
                              transform="translate(0 0.5)"
                            />
                          </clipPath>
                        </defs></svg
                    ></span>
                    <span>03</span>
                  </div>
                  <img
                    class="banner3"
                    src=${banner3}
                    alt="배너 이미지"
                  />
                </div>
              </div>
  `;

  return template;
}
