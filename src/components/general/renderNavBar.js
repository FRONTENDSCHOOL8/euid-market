import { getNode, insertLast } from "../../lib";


const {localStorage:local} = window;



export function renderNavBar() {
  const template = /* html */ 
  `
  <nav class="bottom-bar-container">
    <ul>
      <li>
        <a href="/src/pages/MainPage/">
          <img src="/src/assets/icons/general/home.svg" alt="홈">
          <p class="paragraph-s">홈</p>
        </a>
      </li>
      <li>
        <a href="/src/pages/BoardPage/">
          <img src="/src/assets/icons/general/fullFile.svg" alt="게시판">
          <p class="paragraph-s">게시판</p>
        </a>
      </li>
      <li>
        <a href="/src/pages/MainPage/">
          <img src="/src/assets/icons/general/map.svg" alt="내 근처">
          <p class="paragraph-s">내 근처</p>
        </a>
      </li>
      <li>
        <a href="/src/pages/BoardPage/children_pages/boardContent/">
          <img src="/src/assets/icons/general/chat.svg" alt="채팅">
          <p class="paragraph-s">채팅</p>
        </a>
      </li>
      <li>
        <a href="/src/pages/UserPage/">
          <img src="/src/assets/icons/general/my.svg" alt="나의 이듬">
          <p class="paragraph-s">나의 이듬</p>
        </a>
      </li>
    </ul>
  </nav>
  `

  insertLast("body", template);

  function handleNavBar(e) {
    const target = e.target.closest("nav li a");
    if(!target) return;
  

  }
  
  const navBarContainer = getNode(".bottom-bar-container");
  navBarContainer.addEventListener("click", handleNavBar);


  
}
