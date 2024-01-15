import { getNode } from "/src/lib/index.js";
import { addData, createData, relocateHREF, dropDown, pickCategory } from "../../util/index";


// DOM 요소 값으로 질의응답 데이터 생성
async function createQuestion() {
  const title = getNode("#question-title").value;
  const content = getNode("#question-content").value;
  const category = getNode(".board--create-category-value").textContent;

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
  const categoryContainer = getNode(".board--create-category-container");
  const categoryList = getNode(".board--create-category"); 
  const createQuestionBtn = getNode(".board--create-qna-post");
  
  categoryContainer.addEventListener('click', dropDown);
  categoryList.addEventListener('click', pickCategory);
  createQuestionBtn.addEventListener('click', createQuestion);
})();

