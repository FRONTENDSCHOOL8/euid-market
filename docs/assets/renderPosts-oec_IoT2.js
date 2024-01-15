import{b as r}from"./insert-BLqnNt-Q.js";import"./tiger-5hZ-PmLe.js";import{g as l}from"./handleData-Q5rdxiFu.js";import"./pocketbase-zYAbJ1uT.js";async function n(e){(await l()).forEach(a=>{let s;a.category==="같이해요"?s=`
      <div class="board--post-instance">
        <label class=" label-s board--badge">${a.category}</label> 
        <h2>${a.title}</h2>
        <div class="board--flex">
          <img src="/src/assets/icons/general/fullpeople.svg" alt="" >
          <p>${a.requirements}</p>
        </div>
        
        <div class="board--flex">
          <img src="/src/assets/icons/general/calendar.svg" alt="" >
          <p>${a.time}</p>
        </div>
      </div>
      `:a.category==="질의응답"?s=`
      <div class="board--post-instance">
        <label class="label-s board--badge">${a.stack}</label> 
        <h2>${a.title.length>20?a.content.slice(1,20)+"...":a.title}</h2>
        <p class="paragraph-s board--qna-content">${a.content.length>30?a.content.slice(1,30)+"...":a.content}</p>

        <section class="board--flex">
          <p class="paragraph-s">${a.location}</p>
          <p class="paragraph-s">• 몇일 전</p>
          <p class="paragraph-s">• 조회 123</p>
        </section>
      </div>
      `:s=`
      <div class="board--post-instance">
        <label class=" label-s board--badge">${a.category}</label> 
        <h2>${a.title}</h2>
        <div class="board--flex">
          <img src="/src/assets/icons/general/fullpeople.svg" alt="" >
          <p>${a.requirements}</p>
        </div>
        
        <div class="board--flex">
          <img src="/src/assets/icons/general/calendar.svg" alt="" >
          <p>${a.time}</p>
        </div>
      </div>
      `,r(e,s)})}async function g(e){(await l()).forEach(a=>{const s=`
      <div class="board--together-content" data-id=${a.id}>
        <header>
          <section>
            <p style=${a.status==="모집중"?"color:#5A85EE;":"color:#919191;"} class="paragraph-s">${a.status}</p>
            <p class="paragraph-s">• ${a.type}</p>
            <p class="paragraph-s">• ${a.location}</p>
          </section>
          <h2 class="label-m">${a.title}</h2>
        </header>

        <figure>
          <img src="/src/assets/icons/general/fullpeople.svg" alt="" />
          <figcaption class="paragraph-s">${a.requirements} 참여가능</figcaption>
        </figure>
        <figure>
          <img src="/src/assets/icons/general/calendar.svg" alt="" />
          <figcaption class="paragraph-s">${a.time}</figcaption>
        </figure>

        <div>
          <figure>
            <img class="board--together-profile-picture" src="" alt="" />
            <figcaption class="paragraph-s">${a.curr_people}/${a.max_people}명</figcaption>
          </figure>

          <p class="paragraph-s">35분 전</p>
        </div>
      </div>
    `;r(e,s)})}export{g as a,n as r};
