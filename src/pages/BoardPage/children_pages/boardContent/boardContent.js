import { renderTopBar } from "/src/components/general/renderTopBar.js";
import { renderTogetherPosts, relocateLink } from "../../util/index.js";
import { getNode, insertBefore, insertFirst } from "/src/lib/index.js";


const {localStorage} = window;


function openPost(e) {
  e.preventDefault();
  
  const target = e.target.closest(".board--together-content");
  if(!target) return;
  
  const id = target.dataset.id;
  console.log(id);
  localStorage.setItem("curr_id", id);

  relocateLink("/src/pages/BoardPage/children_pages/postInfo/");
}

const boardContainer = getNode(".board--container");
const postContainer = getNode(".board--together-post-container");
insertBefore(boardContainer, renderTopBar("withTitle"));
insertFirst(postContainer, renderTogetherPosts(postContainer));
postContainer.addEventListener("click", openPost);


const createPostButton = getNode(".board--together-create-post");

createPostButton.addEventListener("click", () => {
  relocateLink("../createPost/")
});