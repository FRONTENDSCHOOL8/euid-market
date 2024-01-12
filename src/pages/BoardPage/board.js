// import PocketBase from 'pocketbase';
import { renderNavBar } from "../../components/general/renderNavBar.js";
import { getNode, } from "../../lib/index.js";
import { renderMainPosts, renderTogetherPosts, renderQuestionPage, addClass, removeClass } from "./util/dom/index.js";
import { relocateLink } from "./util/index.js";

function openPost(e) {
  e.preventDefault();
  
  const target = e.target.closest("div");
  if(!target) return;
  
  const id = target.dataset.id;
  localStorage.setItem("curr_id", id);

  relocateLink("/src/pages/BoardPage/children_pages/postInfo/");
}

function changeLink(element, link="/src/pages/BoardPage/children_pages/createPost/") {
  element.href = link;
}

function handleCategory(e) {
  e.preventDefault();
  const target = e.target;
  const postContainer = getNode(".board--post-list");
  const button = target.closest("button");
  const buttonList = getNode(".board--category-bar-wrapper")
  const createPostBtn = getNode(".board--create-post");
  if(!button) return;

  for(const li of buttonList.children) {
    removeClass(li.children[0], "active-category");
  }

  const targetBtn = {
    "1": () => {
      changeLink(createPostBtn);
      renderPosts(button, postContainer, "main");
    },
    "2": () => {
      changeLink(createPostBtn);
      renderPosts(button, postContainer, "together");
    },
    "3": () => {
      changeLink(createPostBtn, "/src/pages/BoardPage/children_pages/createQuestion/");
      renderPosts(button, postContainer, "question");
    }
  };
  
  const pickButton = targetBtn[button.dataset.index];
  pickButton();
}

function clearContent(container) {
  container.innerHTML = "";
}

function renderPosts(button, container, option) {
  clearContent(container);
  addClass(button, "active-category");
  const postType = {
    "main": () => renderMainPosts(container),
    "together": () => renderTogetherPosts(container),
    "question": () => renderQuestionPage(container)
  };

  const render = postType[option];
  render();
}


(() => {
  renderNavBar();

  const {localStorage} = window;
  localStorage.setItem("curr_page", "board")

  const postContainer = getNode(".board--post-list");
  const categoryBar = getNode('.board--category-bar-container');

  renderMainPosts(postContainer);

  
  categoryBar.addEventListener('click', handleCategory);
  postContainer.addEventListener('click', openPost);

})();





