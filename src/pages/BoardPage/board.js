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

function openPost(e) {
  e.preventDefault();
  
  const target = e.target.closest(".board--post-instance");
  if(!target) return;
  
  const id = target.dataset.id;
  localStorage.setItem("curr_id", id);

  relocateLink("/src/pages/BoardPage/children_pages/postInfo/");
}

function handleCategory(e) {
      e.preventDefault();
  
      const target = e.target;
  
      const button = target.closest("button");
  
      if(!button) return;
      
      // switch 대신 객체를 사용한 방법
      const targetBtn = {
        "1": () => popUp(),
        "2": () => relocateLink("/src/pages/BoardPage/children_pages/boardContent/"),
        "3": () => relocateLink("/src/pages/BoardPage/children_pages/questionPage/")
      };
      
      const pickButton = targetBtn[button.dataset.index];
      pickButton();
}

(() => {
  renderNavBar();
  
  const {localStorage} = window;
  localStorage.setItem("curr_page", "board")

  const postContainer = getNode(".board--post-list");
  const categoryBar = getNode('.board--category-bar-container');

  renderMainPosts(postContainer);
  
  categoryBar.addEventListener('click', handleCategory);
  postContainer.addEventListener('click', openPost);
})();





