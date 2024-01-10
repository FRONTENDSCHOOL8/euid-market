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
  const category = getNode(".board--create-question-category-value").textContent;

  const data = createData({
    "title" : title,
    "content" : content,
    "category" : "질의응답",
    "stack" : category
  })

  addData(data);
} 

// function changeCategory(e) {

//   const target = e.target.closest('button');
//   const currCategory = getNode("")


// }

const categoryContainer = getNode(".board--create-question-category-container");
categoryContainer.addEventListener('click', dropDown);
const createQuestionBtn = getNode(".board--create-qna-post");
createQuestionBtn.addEventListener('click', createQuestion);

