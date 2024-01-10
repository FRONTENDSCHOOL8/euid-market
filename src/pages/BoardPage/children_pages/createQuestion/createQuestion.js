import { getNode } from "/src/lib/index.js";
import { removeClass, addClass } from "../../util/index";




function dropDown() {
  const categories = getNode(".board--create-question-category");
  
  if(categories.classList.contains("hidden")) {
    removeClass(categories, "hidden");
    
  } else {
    addClass(categories, "hidden");
  }
  
}


// function pickCategory() {

// }

const category = getNode(".board--create-question-category-container");
category.addEventListener('click', dropDown);



