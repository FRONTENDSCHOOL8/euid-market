import{i as t}from"./tiger-uvPuI86Z.js";import{g as i}from"./relocate-F3crD4p_.js";import"./pocketbase-zYAbJ1uT.js";const l=[{id:1,badge:"같이해요",title:"youtube 클론 프젝 같이 하실분~!",req:"누구나 참여 가능",time:"내일, 오후 7:00"},{id:2,badge:"질의응답",title:"Netflix는 어떤 회사인가요?",req:"누구나 참여 가능",time:"내일, 오후 7:00"},{id:3,badge:"같이해요",title:"youtube 클론 프젝 같이 하실분~!",req:"20대",time:"내일, 오후 7:00"},{id:4,badge:"같이해요",title:"youtube 클론 프젝 같이 하실분~!",req:"누구나 참여 가능",time:"내일, 오후 7:00"},{id:5,badge:"같이해요",title:"youtube 클론 프젝 같이 하실분~!",req:"누구나 참여 가능",time:"내일, 오후 7:00"},{id:6,badge:"같이해요",title:"youtube 클론 프젝 같이 하실분~!",req:"누구나 참여 가능",time:"내일, 오후 7:00"}];function g(s){l.forEach(e=>{const a=`
      <div class="board--post-instance">
        <label class=" label-s board--badge">${e.badge}</label> 
        <h2>${e.title}</h2>
        <div class="board--flex">
          <img src="/src/assets/icons/general/fullpeople.svg" alt="" >
          <p>${e.req}</p>
        </div>
        
        <div class="board--flex">
          <img src="/src/assets/icons/general/calendar.svg" alt="" >
          <p>${e.time}</p>
        </div>
    `;t(s,a)})}async function d(s){(await i()).forEach(a=>{const r=`
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
    `;t(s,r)})}export{d as a,g as r};
