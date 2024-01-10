(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();function c(e,t=document){if(typeof e!="string")throw new Error("getNode 함수의 인수는 문자 타입 이어야 합니다.");return t.nodeType!==document.DOCUMENT_NODE&&(t=document.querySelector(t)),t.querySelector(e)}function f(e,t){typeof e=="string"&&(e=c(e)),e.insertAdjacentHTML("afterbegin",t)}function g(e,t){typeof e=="string"&&(e=c(e)),e.insertAdjacentHTML("beforeend",t)}function u(e,t){typeof e=="string"&&(e=c(e)),e.insertAdjacentHTML("afterend",t)}const l="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.33325%2017.5V7.5L9.99992%202.5L16.6666%207.5V17.5H11.6666V11.6667H8.33325V17.5H3.33325Z'%20fill='black'/%3e%3c/svg%3e",{localStorage:s}=window;function p(){const e=`
  <nav class="bottom-bar-container">
    <ul>
      <li>
        <a href="/src/pages/MainPage/" data-index=1>
          <img src=${s.getItem("curr_page")==="main",l} alt="홈">
          <p class="paragraph-s">홈</p>
        </a>
      </li>
      <li>
        <a href="/src/pages/BoardPage/" data-index=2>
          <img src=${s.getItem("curr_page")==="board"?"/src/assets/icons/general/fullFile.svg":"/src/assets/icons/general/file.svg"} alt="게시판">
          <p class="paragraph-s">게시판</p>
        </a>
      </li>
      <li>
        <a href="/src/pages/MainPage/" data-index=3>
          <img src=${s.getItem("curr_page")==="location"?"/src/assets/icons/general/fullMap.svg":"/src/assets/icons/general/map.svg"} alt="내 근처">
          <p class="paragraph-s">내 근처</p>
        </a>
      </li>
      <li>
        <a href="/src/pages/BoardPage/children_pages/boardContent/" data-index=4>
          <img src=${s.getItem("curr_page")==="chat"?"/src/assets/icons/general/fullChat.svg":"/src/assets/icons/general/chat.svg"} alt="채팅">
          <p class="paragraph-s">채팅</p>
        </a>
      </li>
      <li>
        <a href="/src/pages/UserPage/" data-index=5>
          <img src=${s.getItem("curr_page")==="user"?"/src/assets/icons/general/fullMy.svg":"/src/assets/icons/general/my.svg"} alt="나의 이듬">
          <p class="paragraph-s">나의 이듬</p>
        </a>
      </li>
    </ul>
  </nav>
  `;g("body",e);function t(i){const r=i.target.closest("nav li a");if(console.log(r),!r)return;const n={1:()=>s.setItem("curr_page","main"),2:()=>s.setItem("curr_page","board"),3:()=>s.setItem("curr_page","location"),4:()=>s.setItem("curr_page","chat"),5:()=>s.setItem("curr_page","profile")}[r.dataset.index];n()}c(".bottom-bar-container").addEventListener("click",t)}p();export{u as a,c as g,f as i};
