import { getNode } from "/src/lib/index.js";
import { removeClass, addClass, addData, createData, getData, relocateHREF } from "../../util/index";




function dropDown() {
  const categories = getNode(".board--create-question-category");
  
  if(categories.classList.contains("hidden")) {
    removeClass(categories, "hidden");
    
  } else {
    addClass(categories, "hidden");
  }
  
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
  relocateHREF("/src/pages/BoardPage/children_pages/questionPage/");
} 

(async () => {
  const categoryContainer = getNode(".board--create-question-category-container");
  categoryContainer.addEventListener('click', dropDown);
  const createQuestionBtn = getNode(".board--create-qna-post");
  const hello = await getData();
  console.log(hello);
  createQuestionBtn.addEventListener('click', createQuestion);
})();

