import{g as p}from"./insert-xagiYKFv.js";import"./tiger-5hZ-PmLe.js";function g(t){throw new TypeError(t)}function m(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}const l=t=>m(t)==="string";function $(t,e){if(typeof t=="string"&&(t=p(t)),typeof e!="string")throw new TypeError("getAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.");return t.getAttribute(e)}function v(t,e,s){if(l(t)&&(t=p(t)),l(e)||g("setAttr함수의 두 번째 인수는 문자 타입 이어야 합니다."),s===""){t.removeAttribute(e);return}if(!s)throw new Error("setAttr함수의 세 번째 인수는 필수 입력값 입니다.");if(e.startsWith("data")){e=e.slice(5),t.dataset[e]=s;return}t.setAttribute(e,s)}const M=(t,e,s)=>s===void 0?$(t,e):v(t,e,s);function u(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function c(t,e="field"){return`https://euid-marke.pockethost.io/api/files/${t.collectionId}/${t.id}/${t[e]}`}const h="data:image/svg+xml,%3csvg%20width='14'%20height='15'%20viewBox='0%200%2014%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Icon/heart'%3e%3cpath%20id='Vector'%20d='M7.05817%2011.3208L6.99984%2011.3792L6.93567%2011.3208C4.16484%208.80667%202.33317%207.14417%202.33317%205.45833C2.33317%204.29167%203.20817%203.41667%204.37484%203.41667C5.27317%203.41667%206.14817%204%206.45734%204.79333H7.54234C7.8515%204%208.7265%203.41667%209.62484%203.41667C10.7915%203.41667%2011.6665%204.29167%2011.6665%205.45833C11.6665%207.14417%209.83484%208.80667%207.05817%2011.3208ZM9.62484%202.25C8.60984%202.25%207.63567%202.7225%206.99984%203.46333C6.364%202.7225%205.38984%202.25%204.37484%202.25C2.57817%202.25%201.1665%203.65583%201.1665%205.45833C1.1665%207.6575%203.14984%209.46%206.154%2012.1842L6.99984%2012.9542L7.84567%2012.1842C10.8498%209.46%2012.8332%207.6575%2012.8332%205.45833C12.8332%203.65583%2011.4215%202.25%209.62484%202.25Z'%20fill='black'/%3e%3c/g%3e%3c/svg%3e";function T(t){const{title:e,major:s,year:n,name:a}=t;return`
      <li class="story">
        <a href="/">
          <figure>
            <img class="story-image" src="${c(t)}" alt="안나옴" />
          </figure>
          <figcaption>
            <div class="story-title">
              ${e}
            </div>
            <div>${s} | ${n}기 수강생 ${a}</div>
            </figcaption>
          </a>
      </li>
    `}function A(t){const{title:e,location:s,price:n,state:a,save:i}=t;let r;return a==="예약중"?r="book":a==="거래 완료"?r="done":r="",`
    <li class="product">
              <a href="${`/src/pages/MainPage/detail/index#${t.id}`}">
                <figure>
                  <img class="product-image" src="${c(t)}" alt="안나옴" />
                </figure>
                <figcaption>
                  <div class="product-title">${e}</div>
                  <div class="product-info-container">
                    <span class="product-location">${s}</span>
                    <span>•</span>
                    <span>1일전</span>
                  </div>
                  <div class="product-state-container">
                    <span class="product-state ${r}">${a}</span>
                    <span>${u(n)}원</span>
                  </div>
                </figcaption>
                </a>
                <div class="Main-like-container">
              <button>
                  <img src="${h}"></img>
                  </button>
                  <span>${i}</span>
                </div>
            </li>
  `}function w(t,e){const s=t.slice(0,4)*31536e6,n=e.slice(0,4)*(1e3*60*60*24*365),a=t.slice(5,7)*(1e3*60*60*24*30),i=e.slice(5,7)*(1e3*60*60*24*30),r=t.slice(8,10)*(1e3*60*60*24),o=e.slice(8,10)*(1e3*60*60*24),f=s+a+r,d=n+i+o;return Math.abs(f-d)/1e3}function y(t){const e=new Date().toISOString(),s=w(t,e);return s<60?"1분전":s<3600?`${Math.floor(s/60)}분전`:s<3600*24?`${Math.floor(s/3600)}시간전`:s<3600*24*30?`${Math.floor(s/3600/24)}일전`:s<3600*24*30*12?`${Math.floor(s/3600/24/30)}개월전`:"오래전"}function x({title:t,type:e,description:s,created:n}){return`
  <div>
    <h1 class="title">${t}</h1>
      <div>
        <span>${e}</span>
        <span>•</span>
        <span>${y(n)}</span>
      </div>
  </div>
  <p>
  ${s}
  </p>
`}function S({price:t}){return`
<span class="price">${u(t)}</span>
`}function k(t){return`
  <div class="user-name-container">
            <img
              class="user-profile"
              src="${c(t,"user_photo")}"
              alt="안보임"
            />
            <div class="user-info-detail">
              <span class="user-name">${t.user_nickname}</span>
              <span class="user-location">응암동</span>
            </div>
          </div>
          <div class="user-temper-container">
            <div class="flex-container">
              <span class="user-temp">${t.user_temperature}℃</span>
              <span class="user-temp-emoji">😀</span>
            </div>
            <span>매너온도</span>
          </div>
          `}export{M as a,S as b,A as e,c as g,x as p,T as s,k as u};
