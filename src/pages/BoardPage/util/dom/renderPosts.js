import { insertFirst } from '/src/lib/index';
import { getData, getUserData, getUserProfilePicture, getQuestionData, getOneData, getTogetherData } from "../index.js";
// import defaultPfp from "/src/assets/images/board/default_pfp.svg";

import fullPeople from "/src/assets/icons/general/fullpeople.svg";
import calendar from "/src/assets/icons/general/calendar.svg";
import people from "/src/assets/icons/board/people.svg";
import fullCalendar from "/src/assets/icons/board/fullCalendar.svg";


export async function renderMainPosts(container) {
  const items = await getData();
  if(!items) {
    const template = /* html */
    `
      <div class="board--empty-post main">
        <h1>게시물이 없습니다</h1>
      </div>
    `
    insertFirst(container, template);
  } else {
    items.forEach((item) => {
      let template;
      if(item.category === "같이해요") {
        template = /* html */
        `
        <button class="board--post-instance" data-id=${item.id}>
          <label class=" label-s board--badge">${item.category}</label> 
          <h2>${item.title.length > 30 ? item.title.slice(0, 30) + "..." : item.title}</h2>
          <figure class="board--flex">
            <img src=${fullPeople} alt="" >
            <figcaption class="paragraph-m">${item.requirements}</figcaption>
          </figure>
          
          <figure class="board--flex">
            <img src=${calendar} alt="" >
            <figcaption class="paragraph-m">${item.time}</figcaption>
          </figure>
        </button>
        `
      } else if(item.category === "질의응답") {
        template = /* html */
        `
        <button class="board--post-instance" data-id=${item.id}>
          <label class="label-s board--badge">${item.category}</label> 
          <h2>${item.title.length > 20 ? item.title.slice(0, 20) + "..." : item.title}</h2>
          <p class="paragraph-s board--qna-content">${item.content.length > 25 ? item.content.slice(0, 25) + "..." : item.content}</p>

          <section class="board--flex">
            <p class="paragraph-s">${item.location}</p>
            <p class="paragraph-s">• 몇일 전</p>
            <p class="paragraph-s">• 조회 123</p>
          </section>
        </button>
        `
      } else {
        template = /* html */
        `
        <button class="board--post-instance">
          <label class=" label-s board--badge">${item.category}</label> 
          <h2>${item.title}</h2>
          <div class="board--flex">
            <img src=${fullPeople} alt="" >
            <p>${item.requirements}</p>
          </div>
          
          <div class="board--flex">
            <img src=${calendar} alt="" >
            <p>${item.time}</p>
          </div>
        </button>
        `
      }

      insertFirst(container, template);
    })
  }
}

export async function renderTogetherPosts(container) {
  const data = await getTogetherData();
  if(!data) {
    const template = /* html */
    `
    <div class="board--empty-post question">
      <h1>게시물이 없습니다</h1>
    </div>
    `
    insertFirst(container, template);
    // TODO: 이 지점에서 return 을 하면 불필요한 정신력 소모를 줄일 수 있지요.
    return;
  }

    data.forEach(async (item) => {
      const user = await getOneData(item.created_by, 'users')
      const userPfp = await getUserProfilePicture(user)
      const template = /* html */
      `
        <button class="board--together-content" data-id=${item.id}>
          <header>
            <section>
              <p style=${item.status === "모집중" ? "color:#5A85EE;" : "color:#919191;"} class="paragraph-s">${item.status}</p>
              <p class="paragraph-s">• ${item.type}</p>
              <p class="paragraph-s">• ${item.location}</p>
            </section>
            <h2 class="label-m">${item.title.length > 25 ? item.title.slice(0, 25) + "..." : item.title}</h2>
          </header>
    
          <figure>
            <img src=${fullPeople} alt="" />
            <figcaption class="paragraph-s">${item.requirements} 참여가능</figcaption>
          </figure>
          <figure>
            <img src=${calendar} alt="" />
            <figcaption class="paragraph-s">${item.time}</figcaption>
          </figure>
    
          <div>
            <figure>
              <img class="board--together-profile-picture" src=${userPfp} alt="유저 사진" />
              <figcaption class="paragraph-s">${item.curr_people}/${item.max_people}명</figcaption>
            </figure>
    
            <p class="paragraph-s">35분 전</p>
          </div>
        </button>
      `
      insertFirst(container, template)
    })
}

export async function renderTogetherPostInfo(container, id) {
  const data = await getOneData(id, 'posts')
  const user = await getUserData(data.created_by);
  const userPfp = await getUserProfilePicture(user);

  const template = /* html */
  `
  <div class="board--post-info">
    <figure class="board--post-info-badge">
      <span>🧀</span>
      <figcaption>${data.type}</figcaption>
    </figure>

    <header>
      <p class="label-l" style=${data.status === "모집중" ? "color:#5A85EE;" : "color:#919191;"}>${data.status}</p>
      <h1 class="label-l" class="board--together-info-title">${data.title}</h1>
      <figure class="board--post-info-requirements">
        <img src=${people} alt="" />
        <figcaption class="paragraph-m">${data.requirements}</figcaption>
      </figure>
      <figure class="board--post-info-requirements">
        <img src=${fullCalendar} alt="" />
        <figcaption class="paragraph-m">스터디</figcaption>
      </figure>
    </header>

    <p class="paragraph-m">${data.content}</p>

    <h3 class="label-m">참여중인 이웃 ${data.curr_people}/${data.max_people}</h3>

    <figure class="board--post-info-creator">
      <img src=${userPfp} alt="유저 사진" />
      
      <div>
        <div>
          <span class="board--post-info-creator-username label-m">${user.user_nickname}</span>
          <span class="board--post-info-creator-role">모임장</span>
        </div>
        <p class="board--post-info-creator-info">연남동 인증 4회</p>
      </div>
      
    </figure>

    <button type="button" class="board--fixed-button">
      참여하기
    </button>
  
  </div>
  `
  insertFirst(container, template);

}

export async function renderQuestionPosts(container) {
  const data = await getQuestionData();
  if(!data) {
    const template = /* html */
    `
    <div class="board--empty-post question">
      <h1>게시물이 없습니다</h1>
    </div>
    `
    insertFirst(container, template);
    // TODO: 이 지점에서 return 을 하면 불필요한 정신력 소모를 줄일 수 있지요.
    return;
  }

  data.forEach((item) => {
      const template = /* html */
      `
        <button class="board--post-instance"  data-id=${item.id}>
          <label class="label-s board--badge">${item.stack}</label> 
          <h2>${item.title.length > 20 ? item.content.slice(0, 20) + "..." : item.title}</h2>
          <p class="paragraph-s board--qna-content">${item.content.length > 30 ? item.content.slice(0, 30) + "..." : item.content}</p>
  
          <section class="board--flex">
            <p class="paragraph-s">${item.location}</p>
            <p class="paragraph-s">• 몇일 전</p>
            <p class="paragraph-s">• 조회 123</p>
          </section>
        </button>    
      `
      insertFirst(container, template);
    })
}

export async function renderQuestionPostInfo(container, id) {
  const data = await getOneData(id, 'posts');
  const user = await getUserData(data.created_by);
  const userPfp = await getUserProfilePicture(user);

  const template = /* html */
  `
  <div class="board--post-info">
    <figure class="board--post-info-badge">
      <figcaption>${data.stack}</figcaption>
    </figure>

    <div role="header">
      <span class="label-l">Q.</span>
      <h1 class="label-l">${data.title}</h1>
      
    </div>

    <p class="paragraph-l">${data.content}</p>

    

    <figure class="board--post-info-creator">
      <img src=${userPfp} alt="유저 사진" />
      
      <div>
        <div>
          <span class="board--post-info-creator-username label-m">${user.user_nickname}</span>
          <span class="board--post-info-creator-role">모임장</span>
        </div>
        <p class="board--post-info-creator-info">연남동 인증 4회</p>
      </div>
      
    </figure>

    <button type="button" class="board--fixed-button">
      생각하기
    </button>
  
  </div>
  `
  insertFirst(container, template);

}

/*
    TODO: let 을 사용해서 시선을 분산시키는 것 보다는 함수 호출을 여러번 쓰시길 권합니다.
          if ~ else 를 여러 번 사용했다는 것은, 함수가 한가지 이상의 일을 하고 있다는 증거입니다.
 */
export async function renderFiltered같이해요Posts(container, searchValue) {
  const data = await getData();
  data.forEach((item) => {
    if(item.title.includes(searchValue)) {
        const template = /* html */
            `
        <div class="board--post-instance" data-id=${item.id}>
          <label class=" label-s board--badge">${item.category}</label> 
          <h2>${item.title.length > 30 ? item.title.slice(0, 30) + "..." : item.title}</h2>
          <figure class="board--flex">
            <img src="/src/assets/icons/general/fullpeople.svg" alt="" >
            <figcaption class="paragraph-m">${item.requirements}</figcaption>
          </figure>
          
          <figure class="board--flex">
            <img src="/src/assets/icons/general/calendar.svg" alt="" >
            <figcaption class="paragraph-m">${item.time}</figcaption>
          </figure>
        </div>
        `
        insertFirst(container, template);
    }
  })
}

export async function renderFiltered질의응답Posts(container, searchValue) {
  const data = await getData();
  data.forEach((item) => {
    if (item.title.includes(searchValue)) {
      /*
          TODO: let 을 사용해서 시선을 분산시키는 것 보다는 함수 호출을 여러번 쓰시길 권합니다.
                if ~ else 를 여러 번 사용했다는 것은, 함수가 한가지 이상의 일을 하고 있다는 증거입니다.
       */
      const template = /* html */
          `
      <div class="board--post-instance" data-id=${item.id}>
        <label class="label-s board--badge">${item.category}</label> 
        <h2>${item.title.length > 20 ? item.title.slice(0, 20) + "..." : item.title}</h2>
        <p class="paragraph-s board--qna-content">${item.content.length > 25 ? item.content.slice(0, 25) + "..." : item.content}</p>

        <section class="board--flex">
          <p class="paragraph-s">${item.location}</p>
          <p class="paragraph-s">• 몇일 전</p>
          <p class="paragraph-s">• 조회 123</p>
        </section>
      </div>
      `
      insertFirst(container, template);
    }
  })
}


export async function renderFilteredPosts(container, searchValue) {
  const data = await getData();
  data.forEach((item) => {
    // TODO: early return 으로 정신력 소모를 줄입시다.
    const has검색어 = item.title.includes(searchValue);
    if(!has검색어) {
      return;
    }
    /*
        TODO: let 을 사용해서 시선을 분산시키는 것 보다는 함수 호출을 여러번 쓰시길 권합니다.
              if ~ else 를 여러 번 사용했다는 것은, 함수가 한가지 이상의 일을 하고 있다는 증거입니다.
     */
    if(item.category === "같이해요") {
      // TODO: 도메인이 복잡하면 심볼의 이름을 한글로 만드는 것도 방법입니다. 문제는 돌고돌아 추상화입니다.
      renderFiltered같이해요Posts(container, searchValue)
      return;
    }

    if(item.category === "질의응답") {
      renderFiltered질의응답Posts(container, searchValue)
    }
  })
}
