import{i as n,g as l}from"./tiger-TocbYAJf.js";const s="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.33325%2017.5V7.5L9.99992%202.5L16.6666%207.5V17.5H11.6666V11.6667H8.33325V17.5H3.33325Z'%20fill='black'/%3e%3c/svg%3e",{localStorage:a}=window;function d(){const r=`
  <nav class="bottom-bar-container">
    <ul>
      <li>
        <a href="/src/pages/MainPage/" data-index=1>
          <img src=${a.getItem("curr_page")==="main",s} alt="홈">
          <p class="paragraph-s">홈</p>
        </a>
      </li>
      <li>
        <a href="/src/pages/BoardPage/" data-index=2>
          <img src=${a.getItem("curr_page")==="board"?"/src/assets/icons/general/fullFile.svg":"/src/assets/icons/general/file.svg"} alt="게시판">
          <p class="paragraph-s">게시판</p>
        </a>
      </li>
      <li>
        <a href="/src/pages/MainPage/" data-index=3>
          <img src=${a.getItem("curr_page")==="location"?"/src/assets/icons/general/fullMap.svg":"/src/assets/icons/general/map.svg"} alt="내 근처">
          <p class="paragraph-s">내 근처</p>
        </a>
      </li>
      <li>
        <a href="/src/pages/BoardPage/children_pages/boardContent/" data-index=4>
          <img src=${a.getItem("curr_page")==="chat"?"/src/assets/icons/general/fullChat.svg":"/src/assets/icons/general/chat.svg"} alt="채팅">
          <p class="paragraph-s">채팅</p>
        </a>
      </li>
      <li>
        <a href="/src/pages/UserPage/" data-index=5>
          <img src=${a.getItem("curr_page")==="user"?"/src/assets/icons/general/fullMy.svg":"/src/assets/icons/general/my.svg"} alt="나의 이듬">
          <p class="paragraph-s">나의 이듬</p>
        </a>
      </li>
    </ul>
  </nav>
  `;n("body",r);function t(c){const e=c.target.closest("nav li a");if(console.log(e),!e)return;const g={1:()=>a.setItem("curr_page","main"),2:()=>a.setItem("curr_page","board"),3:()=>a.setItem("curr_page","location"),4:()=>a.setItem("curr_page","chat"),5:()=>a.setItem("curr_page","profile")}[e.dataset.index];g()}l(".bottom-bar-container").addEventListener("click",t)}export{d as r};
