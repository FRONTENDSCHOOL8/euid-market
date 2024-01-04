import { renderTopBar } from "/src/components/general/renderTopBar.js";
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
insertBefore(boardContainer, renderTopBar("withTitle"));




