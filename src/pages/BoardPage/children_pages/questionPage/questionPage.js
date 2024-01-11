import { renderNavBar, renderTopBar } from "/src/components/general/index.js";
import { getNode, insertFirst } from "/src/lib/index";
import { getQuestionData } from "../../util/index.js";


async function renderQuestionPage(container) {
  const data = await getQuestionData();
  const items = data.items;
  items.forEach((item) => {
    const template = /* html */
    `
      <div class="board--post-instance">
        <label class="label-s board--badge">${item.stack}</label> 
        <h2>${item.title.length > 20 ? item.content.slice(0, 20) + "..." : item.title}</h2>
        <p class="paragraph-s board--qna-content">${item.content.length > 30 ? item.content.slice(0, 30) + "..." : item.content}</p>

        <section class="board--flex">
          <p class="paragraph-s">${item.location}</p>
          <p class="paragraph-s">• 몇일 전</p>
          <p class="paragraph-s">• 조회 123</p>
        </section>
      </div>
    ` 
    insertFirst(container, template);
  })
}

(() => {
  insertFirst("body", renderTopBar("withTitle", "질의응답"));
  renderNavBar();
  const postContainer = getNode(".board--qna-post-container");
  renderQuestionPage(postContainer);
})();