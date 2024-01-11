import { getNode, insertLast } from "../../lib";
import fullHome from '/src/assets/icons/general/fullHome.svg';
import home from '/src/assets/icons/general/home.svg';
import fullFile from '/src/assets/icons/general/fullFile.svg';
import file from '/src/assets/icons/general/file.svg';
import fullMap from '/src/assets/icons/general/fullMap.svg';
import map from '/src/assets/icons/general/map.svg';
import fullChat from '/src/assets/icons/general/fullChat.svg';
import chat from '/src/assets/icons/general/chat.svg';
import fullMy from '/src/assets/icons/general/fullMy.svg';
import my from '/src/assets/icons/general/my.svg';

const {localStorage:local} = window;



export function renderNavBar() {

  

  const template = /* html */ 
  `
  <nav class="bottom-bar-container">
    <ul>
      <li>
        <a href="/src/pages/MainPage/" data-index=1>
          <img src=${local.getItem("curr_page") === "main" ? fullHome : home} alt="">
          <p class="paragraph-s">홈</p>
        </a>
      </li>
      <li>
        <a href="/src/pages/BoardPage/" data-index=2>
          <img src=${local.getItem("curr_page") === "board" ? fullFile : file} alt="">
          <p class="paragraph-s">게시판</p>
        </a>
      </li>
      <li>
        <a href="/src/pages/MainPage/" data-index=3>
          <img src=${local.getItem("curr_page") === "location" ? fullMap : map} alt="">
          <p class="paragraph-s">내 근처</p>
        </a>
      </li>
      <li>
        <a href="/src/pages/BoardPage/children_pages/boardContent/" data-index=4>
          <img src=${local.getItem("curr_page") === "chat" ? fullChat : chat} alt="">
          <p class="paragraph-s">채팅</p>
        </a>
      </li>
      <li>
        <a href="/src/pages/UserPage/" data-index=5>
          <img src=${local.getItem("curr_page") === "user" ? fullMy : my} alt="">
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

    

    const pages = {
      "1": () => local.setItem("curr_page", "main"),
      "2": () => local.setItem("curr_page", "board"),
      "3": () => local.setItem("curr_page", "location"),
      "4": () => local.setItem("curr_page", "chat"),
      "5": () => local.setItem("curr_page", "user")
    };
    
    const changeCurrPage = pages[target.dataset.index];
    changeCurrPage();
  }
  

  
  const navBarContainer = getNode(".bottom-bar-container");
  navBarContainer.addEventListener("click", handleNavBar);


  
}
