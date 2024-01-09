import{g as e,i as d,a as m}from"./tiger-uvPuI86Z.js";import"./pocketbase-zYAbJ1uT.js";import{g as c}from"./index-35H_NU9g.js";import{r as B}from"./renderNavBar-ZFUfoZJi.js";function f(t,i){if(typeof t=="string"&&(t=e(t)),typeof i!="string")throw new TypeError("addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.");t.classList.add(i)}function o(t,i){if(typeof t=="string"&&(t=e(t)),!i){t.className="";return}if(typeof i!="string")throw new TypeError("removeClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.");t.classList.remove(i)}function v(t,i){if(typeof t=="string"&&(t=e(t)),typeof i!="string")throw new TypeError("toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.");return t.classList.toggle(i)}function N(t){throw new TypeError(t)}function R(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}const y=t=>R(t)==="string";function U(t,i){if(typeof t=="string"&&(t=e(t)),typeof i!="string")throw new TypeError("getAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.");return t.getAttribute(i)}function I(t,i,s){if(y(t)&&(t=e(t)),y(i)||N("setAttr함수의 두 번째 인수는 문자 타입 이어야 합니다."),s===""){t.removeAttribute(i);return}if(!s)throw new Error("setAttr함수의 세 번째 인수는 필수 입력값 입니다.");if(i.startsWith("data")){i=i.slice(5),t.dataset[i]=s;return}t.setAttribute(i,s)}const u=(t,i,s)=>s===void 0?U(t,i):I(t,i,s);function b(t){if(typeof t=="string"&&(t=e(t)),t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){t.value="";return}t.textContent=""}function P(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function A(t,i="field"){return`https://euid-marke.pockethost.io/api/files/${t.collectionId}/${t.id}/${t[i]}`}new Swiper(".swiper",{direction:"horizontal",loop:!0,autoplay:{delay:5e3},speed:1e3,pagination:{el:".swiper-pagination"},navigation:{},scrollbar:{el:".swiper-scrollbar"}});function L(t){const{title:i,major:s,year:r,name:a}=t;return`
      <li class="story">
        <a href="/">
          <figure>
            <img src="${A(t)}" alt="안나옴" />
          </figure>
          <figcaption>
            <div class="story-title">
              ${i}
            </div>
            <div>${s} | ${r}기 수강생 ${a}</div>
            </figcaption>
          </a>
      </li>
    `}function $(t){const{title:i,location:s,price:r,state:a,save:g}=t;let l;return a==="예약중"?l="book":a==="거래 완료"?l="done":l="",`
    <li class="product">
              <a href="${`/src/pages/MainPage/detail/index#${t.id}`}">
                <figure>
                  <img src="${A(t)}" alt="안나옴" />
                </figure>
                <figcaption>
                  <div class="product-title">${i}</div>
                  <div class="product-info-container">
                    <span class="product-location">${s}</span>
                    <span>•</span>
                    <span>1일전</span>
                  </div>
                  <div class="product-state-container">
                    <span class="product-state ${l}">${a}</span>
                    <span>${P(r)}원</span>
                  </div>
                </figcaption>
                </a>
                <div class="Main-like-container">
              <button>
                  <img src="/src/assets/icons/main/heart.svg"></img>
                  </button>
                  <span>${g}</span>
                </div>
            </li>
  `}c.defaults({ease:"power2.inOut"});const C=e(".Main-menu-story"),M=e(".Main-story-board"),p=e(".active-button-list"),x=e(".Main-menu-exchange"),O=e(".Main-exchange"),Y=e(".Main-product-list"),n=e(".Main-plus-button"),h=e(".Main-menu-bar"),j=e(".Main-banner");function w(){const t=m(".Main-menu-list li"),i=m(".page-list");t.forEach(r=>{o(r,"isActive")}),i.forEach(r=>{o(r,"isActive")}),o(n,"isActive"),o(p,"isActive");const s="/src/assets/icons/main/plus-white.png";u(n.firstElementChild,"src",s)}function E(t,i){f(t,"isActive"),f(i,"isActive")}function T(t){const i=t.split(" ");t==="Main-menu-exchange"&&!i.includes("isActive")&&(w(),E(x,O)),t==="Main-menu-story"&&!i.includes("isActive")&&(w(),E(C,M))}function S(t){c.from(t,{opacity:0,y:10,stagger:.05})}function k(t,i){i===$?t.forEach(s=>{d(".Main-product-list",i(s))}):i===L&&t.forEach(s=>{d(".Main-story-board",i(s))})}function D(t){const i=t.currentTarget.className;T(i),b(Y),k(productData,$),S(".product")}function W(t){const i=t.currentTarget.className;T(i),b(M),k(seniorData,L),S(".story")}function z(){parseInt(window.scrollY)>=220?f(h,"fixed"):(o(h,"fixed"),j.style.transform=`translateY(${-window.scrollY/2.5}px)`)}function X(){n.addEventListener("mouseover",()=>{c.to(".Main-plus-button",{duration:.2,scale:1.08,y:-5})}),n.addEventListener("mouseout",()=>{c.to(".Main-plus-button",{duration:.2,scale:1,y:0})}),n.addEventListener("click",()=>{const t="/src/assets/icons/main/plus-white.png",i="/src/assets/icons/main/plus-black.png";u(n.firstElementChild,"src")===t?u(n.firstElementChild,"src",i):u(n.firstElementChild,"src",t),v(n,"isActive"),v(p,"isActive"),Array.from(p.classList).includes("isActive")&&c.from(".active-button-list > li",{opacity:0,x:15,y:15,stagger:.02,ease:"power2.out"})})}B();onLoad();C.addEventListener("click",W);x.addEventListener("click",D);window.addEventListener("scroll",z);X();
