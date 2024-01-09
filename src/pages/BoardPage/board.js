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
}

function closePopUp() {
  const popUpContainer = getNode(".board--popup-container");
  gsap.fromTo(popUpContainer, {y:0, duration:.2})
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
        "4": () => console.log("질의응답"),
        "5": () => console.log("자유게시판")
      };
      
      const pickButton = targetBtn[button.dataset.index];
      pickButton();
  }

(() => {
  const postContainer = getNode(".board--post-list");

  renderMainPosts(postContainer);
  const popUpCloseBtn = getNode('.board--popup-close-btn');
  
  const categoryBar = getNode('.board--category-bar-container');
  
  
  popUpCloseBtn.addEventListener('click', closePopUp);
  categoryBar.addEventListener('click', handleCategory);

  

  renderNavBar();
})();





