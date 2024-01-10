import{g as o}from"./tiger-TocbYAJf.js";function f(t){throw new TypeError(t)}function g(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}const c=t=>g(t)==="string";function d(t,e){if(typeof t=="string"&&(t=o(t)),typeof e!="string")throw new TypeError("getAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.");return t.getAttribute(e)}function u(t,e,i){if(c(t)&&(t=o(t)),c(e)||f("setAttr함수의 두 번째 인수는 문자 타입 이어야 합니다."),i===""){t.removeAttribute(e);return}if(!i)throw new Error("setAttr함수의 세 번째 인수는 필수 입력값 입니다.");if(e.startsWith("data")){e=e.slice(5),t.dataset[e]=i;return}t.setAttribute(e,i)}const h=(t,e,i)=>i===void 0?d(t,e):u(t,e,i);function l(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function p(t,e="field"){return`https://euid-marke.pockethost.io/api/files/${t.collectionId}/${t.id}/${t[e]}`}const $="data:image/svg+xml,%3csvg%20width='14'%20height='15'%20viewBox='0%200%2014%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Icon/heart'%3e%3cpath%20id='Vector'%20d='M7.05817%2011.3208L6.99984%2011.3792L6.93567%2011.3208C4.16484%208.80667%202.33317%207.14417%202.33317%205.45833C2.33317%204.29167%203.20817%203.41667%204.37484%203.41667C5.27317%203.41667%206.14817%204%206.45734%204.79333H7.54234C7.8515%204%208.7265%203.41667%209.62484%203.41667C10.7915%203.41667%2011.6665%204.29167%2011.6665%205.45833C11.6665%207.14417%209.83484%208.80667%207.05817%2011.3208ZM9.62484%202.25C8.60984%202.25%207.63567%202.7225%206.99984%203.46333C6.364%202.7225%205.38984%202.25%204.37484%202.25C2.57817%202.25%201.1665%203.65583%201.1665%205.45833C1.1665%207.6575%203.14984%209.46%206.154%2012.1842L6.99984%2012.9542L7.84567%2012.1842C10.8498%209.46%2012.8332%207.6575%2012.8332%205.45833C12.8332%203.65583%2011.4215%202.25%209.62484%202.25Z'%20fill='black'/%3e%3c/g%3e%3c/svg%3e";function C(t){const{title:e,major:i,year:n,name:a}=t;return`
      <li class="story">
        <a href="/">
          <figure>
            <img src="${p(t)}" alt="안나옴" />
          </figure>
          <figcaption>
            <div class="story-title">
              ${e}
            </div>
            <div>${i} | ${n}기 수강생 ${a}</div>
            </figcaption>
          </a>
      </li>
    `}function w(t){const{title:e,location:i,price:n,state:a,save:r}=t;let s;return a==="예약중"?s="book":a==="거래 완료"?s="done":s="",`
    <li class="product">
              <a href="${`/src/pages/MainPage/detail/index#${t.id}`}">
                <figure>
                  <img src="${p(t)}" alt="안나옴" />
                </figure>
                <figcaption>
                  <div class="product-title">${e}</div>
                  <div class="product-info-container">
                    <span class="product-location">${i}</span>
                    <span>•</span>
                    <span>1일전</span>
                  </div>
                  <div class="product-state-container">
                    <span class="product-state ${s}">${a}</span>
                    <span>${l(n)}원</span>
                  </div>
                </figcaption>
                </a>
                <div class="Main-like-container">
              <button>
                  <img src="${$}"></img>
                  </button>
                  <span>${r}</span>
                </div>
            </li>
  `}function y(t){return`
  <div>
    <h1 class="title">${t.title}</h1>
      <div>
        <span>${t.type}</span>
        <span>•</span>
        <span>17분전</span>
      </div>
  </div>
  <p>
  ${t.description}
  </p>
`}function b(t){return`
<span class="price">${l(t.price)}</span>
`}export{h as a,b,w as e,p as g,y as p,C as s};
