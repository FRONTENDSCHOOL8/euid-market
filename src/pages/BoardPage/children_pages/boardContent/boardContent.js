import { renderTopBar, renderNavBar } from "/src/components/general/index.js";
import { renderTogetherPosts, relocateLink } from "../../util/index.js";
import { getNode, insertBefore } from "/src/lib/index.js";
import pb from "/src/lib/api/pocketbase";

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

// 추후에 수정 필요
localStorage.setItem("curr_page", "chat"); 
// 

renderNavBar();

console.log(pb);
console.log(import.meta.env.VITE_PB_URL);
const boardContainer = getNode(".board--container");
const postContainer = getNode(".board--together-post-container");
insertBefore(boardContainer, renderTopBar("withTitle"));
renderTogetherPosts(postContainer);
postContainer.addEventListener("click", openPost);

const createPostButton = getNode(".board--together-create-post");

createPostButton.addEventListener("click", () => {
  relocateLink("../createPost/")
});