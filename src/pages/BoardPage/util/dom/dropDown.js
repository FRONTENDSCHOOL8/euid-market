import { removeClass, addClass} from "../index";
import { getNode } from "/src/lib/index.js";


export function dropDown() {
  const categories = getNode(".board--create-category");

  if(categories.classList.contains("hidden")) {
    removeClass(categories, "hidden");

  } else {
    addClass(categories, "hidden");
  }
}

export function pickCategory(e) {
  const target = e.target.closest('button');
  const category = getNode(".board--create-category-value");
  if(!target) return;
  console.log(target);
  category.textContent = target.textContent;
}