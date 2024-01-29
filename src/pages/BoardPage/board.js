import { renderNavBar } from "../../components/general/renderNavBar.js";
import { clearContents, getNode, sessionHandler } from "../../lib/index.js";
import {
  renderMainPosts,
  renderTogetherPosts,
  renderQuestionPosts,
  renderFilteredPosts,
  addClass,
  removeClass,
  clearContent,
  changeLink,
  relocateLink,
  cancelRequests, } from "./util/index.js";


// 선택 카테고리 게시물 렌더링
// function renderPosts(button, container, option) {
//   addClass(button, "active-category");

//   const postType = {
//     "main": () => renderMainPosts(container),
//     "together": () => renderTogetherPosts(container),
//     "question": () => renderQuestionPosts(container)
//   };

//   const render = postType[option];
//   render();
// }

// 게시물 상세 페이지 이동
function openPost(e) {
  e.preventDefault();

  const target = e.target.closest("button");
  if(!target) return;

  const id = target.dataset.id;
  localStorage.setItem("curr_id", id);

  relocateLink("/src/pages/BoardPage/children_pages/postInfo/");
}

//모든 자식 요소에서 active클래스 삭제
function removeActive(list) {
  for(const li of list.children) {
    removeClass(li.children[0], "active-category");
  }
}

// 카테고리 버튼 이벤트 리스너
function handleCategory(e) {
  e.preventDefault();
  const target = e.target;
  const postContainer = getNode(".board--post-list");
  const button = target.closest("button");
  const buttonList = getNode(".board--category-bar-wrapper")
  const createPostBtn = getNode(".board--create-post");
  clearContents(postContainer);
  cancelRequests();
  // TODO: 이렇게 예외상황을 처음부터 차단하는것이 좋습니다. 훌륭합니다.
  if(!button) return;

  removeActive(buttonList);

  addClass(button, "active-category");

  /**
   * TODO: 이런 류의 추상화가 재활용을 어렵게 만듭니다(다른 사람이 읽기 싫어하는 코드가 된다는 뜻).
   * 잘 하셨지만, 좀 더 자연어에 가깝게 연출해 보세요.
   */
  if (button.dataset.index === "1") {
    changeLink(createPostBtn);
    renderMainPosts(postContainer);
    return;
  }

  if (button.dataset.index === "2") {
    changeLink(createPostBtn);
    renderTogetherPosts(postContainer);
    return;
  }

  if (button.dataset.index === "3") {
    changeLink(createPostBtn, "/src/pages/BoardPage/children_pages/createQuestion/");
    renderQuestionPosts(postContainer);
    return;
  }
}



function search(e) {
  e.preventDefault();
  const search = getNode("#board--search-post");
  const buttonList = getNode(".board--category-bar-wrapper");
  const postContainer = getNode(".board--post-list");
  const totalBtn = getNode(".board--category-first-button");
  removeActive(buttonList);
  clearContent(postContainer);
  addClass(totalBtn, "active-category");

  if(search.value !== "") {
    renderFilteredPosts(postContainer, search.value);
    return;
  }

  renderMainPosts(postContainer);
}

(() => {
  renderNavBar();
  sessionHandler();

  const {localStorage} = window;
  localStorage.setItem("curr_page", "board")

  const searchForm = getNode(".board--search-post-container");
  const postContainer = getNode(".board--post-list");
  const categoryBar = getNode('.board--category-bar-container');

  renderMainPosts(postContainer);

  searchForm.addEventListener('submit', search);
  categoryBar.addEventListener('click', handleCategory);
  postContainer.addEventListener('click', openPost);
})();





