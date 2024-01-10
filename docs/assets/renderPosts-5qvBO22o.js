import{b as c}from"./insert-SaVLNoVJ.js";import"./tiger-gZF_wzjS.js";import{g as e}from"./relocate-1iwBSlKm.js";import"./pocketbase-x9NIBkj4.js";async function g(s){(await e()).forEach(a=>{const r=`
      <div class="board--post-instance">
        <label class=" label-s board--badge">${a.badge}</label> 
        <h2>${a.title}</h2>
        <div class="board--flex">
          <img src="/src/assets/icons/general/fullpeople.svg" alt="" >
          <p>${a.req}</p>
        </div>
        
        <div class="board--flex">
          <img src="/src/assets/icons/general/calendar.svg" alt="" >
          <p>${a.time}</p>
        </div>
    `;insertLast(s,r)})}async function n(s){(await e()).forEach(a=>{const r=`
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
    `;c(s,r)})}export{n as a,g as r};
