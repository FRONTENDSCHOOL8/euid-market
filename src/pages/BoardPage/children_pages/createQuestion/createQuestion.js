import { getNode } from "/src/lib/index.js";
import { removeClass, addClass } from "../../util/index";
import gsap from "gsap";



function dropDown() {
  const categories = getNode(".board--create-question-category");
  
  if(categories.classList.contains("hidden")) {
    removeClass(categories, "hidden");
    gsap.from(document.querySelectorAll(".board--create-question-category"), {y: -500, duration: .2, ease:"power1.in"})
  } else {
    addClass(categories, "hidden");
  }
  
}


// function pickCategory() {

// }

const category = getNode(".board--create-question-category-container");
category.addEventListener('click', dropDown);



