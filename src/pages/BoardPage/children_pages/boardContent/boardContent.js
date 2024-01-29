import { renderTopBar, renderNavBar } from "/src/components/general/index.js";
import { renderTogetherPosts, relocateLink } from "../../util/index.js";
import { getNode, insertBefore } from "/src/lib/index.js";

const {localStorage} = window;

function openPost(e) {
  e.preventDefault();

  const target = e.target.closest(".board--together-content");
  // TODO: early return 으로 예외를 배제해버리는 코드가 아주 좋습니다.
  if(!target) return;

  const id = target.dataset.id;
  localStorage.setItem("curr_id", id);

  relocateLink("/src/pages/BoardPage/children_pages/postInfo/");
}

(() => {
// 추후에 수정 필요
localStorage.setItem("curr_page", "chat");
renderNavBar();

const boardContainer = getNode(".board--container");
const postContainer = getNode(".board--together-post-container");

insertBefore(boardContainer, renderTopBar("withTitle"));
renderTogetherPosts(postContainer);

postContainer.addEventListener("click", openPost);
const createPostButton = getNode(".board--create-post");

createPostButton.addEventListener("click", () => {
  relocateLink("../createPost/")
});
})();
