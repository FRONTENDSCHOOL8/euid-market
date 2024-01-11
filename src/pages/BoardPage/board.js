// import PocketBase from 'pocketbase';
import { renderNavBar } from "../../components/general/renderNavBar.js";
import { getNode, } from "../../lib/index.js";
import { renderMainPosts, addClass, removeClass } from "./util/dom/index.js";
import { relocateLink } from "./util/index.js";
import { gsap } from "gsap";


function popUp() {
  const popUpContainer = getNode(".board--popup-container");
  removeClass(popUpContainer, 'hidden');
  gsap.from(popUpContainer, {y:1000, duration:.2});
  const popUpCloseBtn = getNode('.board--popup-close-btn');
  popUpCloseBtn.addEventListener('click', closePopUp);
}

function closePopUp() {
  const popUpContainer = getNode(".board--popup-container");
  addClass(popUpContainer, 'hidden');
}

function handleCategory(e) {
      e.preventDefault();
  
      const target = e.target;
  
      const button = target.closest("button");
  
      if(!button) return;
      console.log(button);
      
      // switch 대신 객체를 사용한 방법
      const targetBtn = {
        "1": () => popUp(),
        "2": () => console.log("인기글"),
        "3": () => relocateLink("/src/pages/BoardPage/children_pages/boardContent/"),
        "4": () => relocateLink("/src/pages/BoardPage/children_pages/questionPage/"),
        "5": () => console.log("자유게시판")
      };
      
      const pickButton = targetBtn[button.dataset.index];
      pickButton();
}

(() => {
  renderNavBar();

  const {localStorage} = window;
  localStorage.setItem("curr_page", "board")

  const postContainer = getNode(".board--post-list");

  renderMainPosts(postContainer);

  const categoryBar = getNode('.board--category-bar-container');
  categoryBar.addEventListener('click', handleCategory);
})();





