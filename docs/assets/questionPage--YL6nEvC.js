import"./tiger-5hZ-PmLe.js";import{r as n}from"./renderNavBar-7tb3M7JA.js";import{r as e}from"./renderTopBar-hcF64SbR.js";import{g as c}from"./getNode-pa7syr6m.js";import{b as o}from"./insert-BLqnNt-Q.js";import{b as p}from"./handleData-Q5rdxiFu.js";import"./pocketbase-zYAbJ1uT.js";async function l(s){const t=(await p()).items;console.log(t),t.forEach(a=>{const r=`
      <div class="board--post-instance">
        <label class="label-s board--badge">${a.stack}</label> 
        <h2>${a.title.length>20?a.content.slice(0,20)+"...":a.title}</h2>
        <p class="paragraph-s board--qna-content">${a.content.length>30?a.content.slice(0,30)+"...":a.content}</p>

        <section class="board--flex">
          <p class="paragraph-s">${a.location}</p>
          <p class="paragraph-s">• 몇일 전</p>
          <p class="paragraph-s">• 조회 123</p>
        </section>
      </div>
    `;o(s,r)})}o("body",e("withTitle","질의응답"));n();const i=c(".board--qna-post-container");l(i);
