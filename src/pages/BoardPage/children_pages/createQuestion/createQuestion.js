import { getNode } from "/src/lib/index.js";
import { removeClass, addClass, addData, createData, relocateHREF } from "../../util/index";




function dropDown() {
  const categories = getNode(".board--create-question-category");

  if(categories.classList.contains("hidden")) {
    removeClass(categories, "hidden");

  } else {
    addClass(categories, "hidden");
  }
}

function pickCategory(e) {
  const target = e.target.closest('button');
  const category = getNode(".board--create-question-category-value");
  if(!target) return;
  console.log(target);
  category.textContent = target.textContent;
}

async function createQuestion() {
  const title = getNode("#question-title").value;
  const content = getNode("#question-content").value;
  const category = getNode(".board--create-question-category-value").textContent;

  const data = createData({
    "title" : title,
    "content" : content,
    "category" : "질의응답",
    "stack" : category
  })

  await addData(data);
  relocateHREF("/src/pages/BoardPage/");
} 

(() => {
  const categoryContainer = getNode(".board--create-question-category-container");
  const categoryList = getNode(".board--create-question-category"); 
  const createQuestionBtn = getNode(".board--create-qna-post");
  
  categoryContainer.addEventListener('click', dropDown);
  categoryList.addEventListener('click', pickCategory);
  createQuestionBtn.addEventListener('click', createQuestion);
})();

