import { topBar } from "/src/components/board/index.js";
import { getNode, insertBefore } from "/src/lib/index.js";





export function boardContent() {
  const template = /* html */
  `


    <div>
      <img src="" alt="" />
      <h2>같이해요</h2>
    </div>


    <div class="board--content-container">
      
    </div>
  `;
  return template;

}

const boardContainer = getNode(".board--container");
insertBefore(boardContainer, topBar("같이해요", "withTitle"));




