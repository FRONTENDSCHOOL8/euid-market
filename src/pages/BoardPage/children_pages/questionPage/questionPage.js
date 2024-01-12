import { renderNavBar, renderTopBar } from "/src/components/general/index.js";
import { getNode, insertFirst } from "/src/lib/index";
import { renderQuestionPage, relocateLink } from "../../util/index.js";


function openPost(e) {
  e.preventDefault();
  
  const target = e.target.closest(".board--post-instance");
  if(!target) return;
  
  const id = target.dataset.id;
  localStorage.setItem("curr_id", id);

  relocateLink("/src/pages/BoardPage/children_pages/postInfo/");
}
 

(() => {
  insertFirst("body", renderTopBar("withTitle", "질의응답"));
  renderNavBar();
  const postContainer = getNode(".board--qna-post-container");
  renderQuestionPage(postContainer);
  postContainer.addEventListener('click', openPost);
})();