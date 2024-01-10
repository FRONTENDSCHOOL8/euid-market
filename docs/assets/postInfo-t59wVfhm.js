import"./tiger-gZF_wzjS.js";import{r as e}from"./renderTopBar-hcF64SbR.js";import{i,g as n,d as p}from"./insert-SaVLNoVJ.js";import{p as c}from"./pocketbase-x9NIBkj4.js";async function l(o,t){const a=await c.collection("posts").getOne(t),r=`
  <div class="board--post-info">
    <figure class="board--post-info-badge">
      <span>🧀</span>
      <figcaption>${a.type}</figcaption>
    </figure>

    <div role="header">
      <span class="label-l" style=${a.status==="모집중"?"color:#5A85EE;":"color:#919191;"}>${a.status}</span>
      <h1 class="label-l">${a.title}</h1>
      <figure>
        <img src="/src/assets/icons/board/people.svg" alt="" />
        <figcaption class="paragraph-m">${a.requirements}</figcaption>
      </figure>
      <figure>
        <img src="/src/assets/icons/board/fullCalendar.svg" alt="" />
        <figcaption class="paragraph-m">스터디</figcaption>
      </figure>
    </div>

    <p class="paragraph-m">${a.content}</p>

    <h3 class="label-m">참여중인 이웃 ${a.curr_people}/${a.max_people}</h3>

    <figure>
      <img src="" alt="" />
      
      <span>멋사드미</span>
      <span>모임장</span>
      <h3>연남동 인증 4회</h3>
      
    </figure>

    <button class="board--fixed-button">
      참여하기
    </button>
  
  </div>
  `;i(o,r)}const{localStorage:g}=window,f=g.curr_id,s=n(".board--post-info-container");p(s,e("withShare"));l(s,f);
