import{g as r}from"./tiger-TocbYAJf.js";import{r as s}from"./renderNavBar-Vb5f-fgx.js";import{a as p,r as c}from"./classList-WMK_0JNQ.js";import{r as i}from"./renderPosts-0YtyJ0m2.js";import"./pocketbase-zYAbJ1uT.js";import{r as d}from"./relocate-F3crD4p_.js";import{g as e}from"./index-35H_NU9g.js";function l(){const o=r(".board--popup-container");c(o,"hidden"),e.from(o,{y:1e3,duration:.2})}function g(){const o=r(".board--popup-container");e.fromTo(o,{y:0,duration:.2}),p(o,"hidden")}function m(o){o.preventDefault();const t=o.target.closest("button");if(!t)return;console.log(t);const a={1:()=>l(),2:()=>console.log("인기글"),3:()=>d("/src/pages/BoardPage/children_pages/boardContent/"),4:()=>console.log("질의응답"),5:()=>console.log("자유게시판")}[t.dataset.index];a()}(()=>{const o=r(".board--post-list");i(o);const n=r(".board--popup-close-btn"),t=r(".board--category-bar-container");n.addEventListener("click",g),t.addEventListener("click",m),s()})();