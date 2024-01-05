import { insertLast } from "../../../../lib";
import { renderTopBar } from "/src/components/general/renderTopBar.js";
import { renderTogetherPosts } from "../../util/dom/index.js";
import { getNode, insertBefore } from "/src/lib/index.js";





// export function boardContent() {
//   const template = /* html */
//   `


//     <div>
//       <img src="" alt="" />
//       <h2>같이해요</h2>
//     </div>


//     <div class="board--content-container">
      
//     </div>
//   `;
//   return template;

// }


const boardContainer = getNode(".board--container");
const postContainer = getNode(".board--together-post-container");
insertBefore(boardContainer, renderTopBar("withTitle"));
insertLast(postContainer, renderTogetherPosts(postContainer));




