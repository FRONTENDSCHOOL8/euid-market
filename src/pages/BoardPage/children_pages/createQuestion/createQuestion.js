import { getNode } from "/src/lib/index.js";
import { removeClass, addClass, addData, createData } from "../../util/index";




function dropDown() {
  const categories = getNode(".board--create-question-category");
  
  if(categories.classList.contains("hidden")) {
    removeClass(categories, "hidden");
    
  } else {
    addClass(categories, "hidden");
  }
  
}

function createQuestion() {
  const title = getNode("#question-title").value;
  const content = getNode("#question-content").value;

  const data = createData({
    "title" : title,
    "content" : content,
    "category" : "질의응답",
    "stack" : "JS"
  })

  addData(data);
} 

const category = getNode(".board--create-question-category-container");
category.addEventListener('click', dropDown);
const createQuestionBtn = getNode(".board--create-qna-post");
createQuestionBtn.addEventListener('click', createQuestion);
