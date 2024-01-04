// import PocketBase from 'pocketbase';
import data from "./temp_data/data.json"

import { getNode } from "../../lib/index.js";
import { createPost } from "./util/dom/createPost.js";

/* -------------- debugging area --------------*/
function extractData() { 
  console.log(data);
}

createPost();
extractData();
/*--------------------------------------------*/



//create event listener for categories
const boardContainer = getNode('.board--category-bar-container');


function handleCategory(e) {
  e.preventDefault();

  const target = e.target;

  const button = target.closest("button");

  if(!button) return;
  console.log(button);
  
  // switch 대신 객체를 사용한 방법
  const targetBtn = {
    "1": () => console.log("주제"),
    "2": () => console.log("인기글"),
    "3": () => console.log("같이해요"),
    "4": () => console.log("질의응답"),
    "5": () => console.log("자유게시판")
  };
  
  const pickButton = targetBtn[button.dataset.index];
  pickButton();

}


boardContainer.addEventListener('click', handleCategory);
