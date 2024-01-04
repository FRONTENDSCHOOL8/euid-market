// import PocketBase from 'pocketbase';
import { getNode, } from "../../lib/index.js";
import { renderMainPosts, addClass, removeClass } from "./util/dom/index.js";

/* -------------- debugging area --------------*/
renderMainPosts();
/*--------------------------------------------*/






const popUpCloseBtn = getNode('.board--popup-close-btn');
const popUp = getNode('.board--popup-container');
popUpCloseBtn.addEventListener('click', () => addClass(popUp, 'hidden'));



//Category Bar Event Listener Function
function handleCategory(e) {
    e.preventDefault();

    const target = e.target;

    const button = target.closest("button");

    if(!button) return;
    console.log(button);
    
    // switch 대신 객체를 사용한 방법
    const targetBtn = {
      "1": () => removeClass(popUp, 'hidden'),
      "2": () => console.log("인기글"),
      "3": () => console.log("같이해요"),
      "4": () => console.log("질의응답"),
      "5": () => console.log("자유게시판")
    };
    
    const pickButton = targetBtn[button.dataset.index];
    pickButton();
}

const categoryBar = getNode('.board--category-bar-container')
categoryBar.addEventListener('click', handleCategory);

