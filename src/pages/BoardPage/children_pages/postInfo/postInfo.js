import { renderTopBar } from "/src/components/general/renderTopBar.js";
import { getNode, insertBefore } from "/src/lib/index.js";
import { renderTogetherPostInfo, renderQuestionPostInfo, getOneData } from "../../util/index.js";


// 카테고리에 따른 게시물 상세 정보 렌더링
async function renderPost(id, collection) {
  const postData = await getOneData(id, collection); 
  const container = getNode(".board--post-info-container");
  if(postData.category === "같이해요") {
    renderTogetherPostInfo(container, id);
  } else if(postData.category === "질의응답") {
    renderQuestionPostInfo(container, id);
  }
}

const {localStorage} = window;
const id = localStorage.curr_id;
const container = getNode(".board--post-info-container");
insertBefore(container, renderTopBar("withShare"));
renderPost(id, 'posts');

