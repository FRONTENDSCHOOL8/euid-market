import { renderTopBar } from "/src/components/general/renderTopBar.js";
import { renderTogetherPosts, relocateLink } from "../../util/index.js";
import { getNode, insertBefore, insertFirst } from "/src/lib/index.js";






const boardContainer = getNode(".board--container");
const postContainer = getNode(".board--together-post-container");
insertBefore(boardContainer, renderTopBar("withTitle"));
insertFirst(postContainer, renderTogetherPosts(postContainer));


const createPostButton = getNode(".board--together-create-post");

createPostButton.addEventListener("click", () => {
  relocateLink("../createPost/")
});