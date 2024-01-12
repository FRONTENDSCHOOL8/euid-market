import { insertFirst } from '/src/lib/index';
import { getData, getUserData, getUserProfilePicture, getQuestionData, getOneData, getTogetherData } from "../index.js";


export async function renderMainPosts(container) {
  const items = await getData();
  items.forEach((item) => {
    let template;
    if(item.category === "같이해요") {
      template = /* html */ 
      `
      <div class="board--post-instance" data-id=${item.id}>
        <label class=" label-s board--badge">${item.category}</label> 
        <h2>${item.title}</h2>
        <div class="board--flex">
          <img src="/src/assets/icons/general/fullpeople.svg" alt="" >
          <p>${item.requirements}</p>
        </div>
        
        <div class="board--flex">
          <img src="/src/assets/icons/general/calendar.svg" alt="" >
          <p>${item.time}</p>
        </div>
      </div>
      `
    } else if(item.category === "질의응답") {
      template = /* html */
      `
      <div class="board--post-instance" data-id=${item.id}>
        <label class="label-s board--badge">${item.category}</label> 
        <h2>${item.title.length > 20 ? item.content.slice(1, 20) + "..." : item.title}</h2>
        <p class="paragraph-s board--qna-content">${item.content.length > 30 ? item.content.slice(1, 30) + "..." : item.content}</p>

        <section class="board--flex">
          <p class="paragraph-s">${item.location}</p>
          <p class="paragraph-s">• 몇일 전</p>
          <p class="paragraph-s">• 조회 123</p>
        </section>
      </div>
      `  
    } else {
      template = /* html */ 
      `
      <div class="board--post-instance">
        <label class=" label-s board--badge">${item.category}</label> 
        <h2>${item.title}</h2>
        <div class="board--flex">
          <img src="/src/assets/icons/general/fullpeople.svg" alt="" >
          <p>${item.requirements}</p>
        </div>
        
        <div class="board--flex">
          <img src="/src/assets/icons/general/calendar.svg" alt="" >
          <p>${item.time}</p>
        </div>
      </div>
      `
    }

    insertFirst(container, template);
  })
}

export async function renderTogetherPosts(container) {
  const data = await getTogetherData();
  const items = data.items;
  items.forEach((item) => {
    getOneData(item.created_by, 'users').then((user) => {
      getUserProfilePicture(user)
      .then((imageURL) => {
        const template = /* html */ 
        `
          <div class="board--together-content" data-id=${item.id}>
            <header>
              <section>
                <p style=${item.status === "모집중" ? "color:#5A85EE;" : "color:#919191;"} class="paragraph-s">${item.status}</p>
                <p class="paragraph-s">• ${item.type}</p>
                <p class="paragraph-s">• ${item.location}</p>
              </section>
              <h2 class="label-m">${item.title}</h2>
            </header>
    
            <figure>
              <img src="/src/assets/icons/general/fullpeople.svg" alt="" />
              <figcaption class="paragraph-s">${item.requirements} 참여가능</figcaption>
            </figure>
            <figure>
              <img src="/src/assets/icons/general/calendar.svg" alt="" />
              <figcaption class="paragraph-s">${item.time}</figcaption>
            </figure>
    
            <div>
              <figure>
                <img class="board--together-profile-picture" src=${imageURL} alt="유저 사진" />
                <figcaption class="paragraph-s">${item.curr_people}/${item.max_people}명</figcaption>
              </figure>
    
              <p class="paragraph-s">35분 전</p>
            </div>
          </div>
        `
        insertFirst(container, template)      
      })
    })
  })
}

export async function renderTogetherPostInfo(container, id) {
  const data = await getOneData(id, 'posts')
  let user;
  getUserData(data.created_by).then((creator) => {
    user = creator;
    getUserProfilePicture(user).then((imageURL) => {
      const template = /* html */ 
      `
      <div class="board--post-info">
        <figure class="board--post-info-badge">
          <span>🧀</span>
          <figcaption>${data.type}</figcaption>
        </figure>
    
        <div role="header">
          <span class="label-l" style=${data.status === "모집중" ? "color:#5A85EE;" : "color:#919191;"}>${data.status}</span>
          <h1 class="label-l">${data.title}</h1>
          <figure class="board--post-info-requirements">
            <img src="/src/assets/icons/board/people.svg" alt="" />
            <figcaption class="paragraph-m">${data.requirements}</figcaption>
          </figure>
          <figure class="board--post-info-requirements">
            <img src="/src/assets/icons/board/fullCalendar.svg" alt="" />
            <figcaption class="paragraph-m">스터디</figcaption>
          </figure>
        </div>
    
        <p class="paragraph-m">${data.content}</p>
    
        <h3 class="label-m">참여중인 이웃 ${data.curr_people}/${data.max_people}</h3>
    
        <figure class="board--post-info-creator">
          <img src=${imageURL} alt="유저 사진" />
          
          <div>
            <div>
              <span class="board--post-info-creator-username label-m">${user.user_nickname}</span>
              <span class="board--post-info-creator-role">모임장</span>
            </div>
            <p class="board--post-info-creator-info">연남동 인증 4회</p>
          </div>
          
        </figure>
    
        <button class="board--fixed-button">
          참여하기
        </button>
      
      </div>
      `
      insertFirst(container, template);
    })
    .catch(() => {
      const template = /* html */ 
      `
      <div class="board--post-info">
        <figure class="board--post-info-badge">
          <span>🧀</span>
          <figcaption>${data.type}</figcaption>
        </figure>
    
        <div role="header">
          <span class="label-l" style=${data.status === "모집중" ? "color:#5A85EE;" : "color:#919191;"}>${data.status}</span>
          <h1 class="label-l">${data.title}</h1>
          <figure class="board--post-info-requirements">
            <img src="/src/assets/icons/board/people.svg" alt="" />
            <figcaption class="paragraph-m">${data.requirements}</figcaption>
          </figure>
          <figure class="board--post-info-requirements">
            <img src="/src/assets/icons/board/fullCalendar.svg" alt="" />
            <figcaption class="paragraph-m">스터디</figcaption>
          </figure>
        </div>
    
        <p class="paragraph-m">${data.content}</p>
    
        <h3 class="label-m">참여중인 이웃 ${data.curr_people}/${data.max_people}</h3>
    
        <figure class="board--post-info-creator">
          <div class="board--post-info-creator-placeholder"></div>
          
          <div>
            <div>
              <span class="board--post-info-creator-username label-m">${user.user_nickname}</span>
              <span class="board--post-info-creator-role">모임장</span>
            </div>
            <p class="board--post-info-creator-info">연남동 인증 4회</p>
          </div>
          
        </figure>
    
        <button class="board--fixed-button">
          참여하기
        </button>
      
      </div>
      `
      insertFirst(container, template);
    })
  })
}

export async function renderQuestionPage(container) {
  const data = await getQuestionData();
  const items = data.items;
  items.forEach((item) => {
    const template = /* html */
    `
      <div class="board--post-instance"  data-id=${item.id}>
        <label class="label-s board--badge">${item.stack}</label> 
        <h2>${item.title.length > 20 ? item.content.slice(0, 20) + "..." : item.title}</h2>
        <p class="paragraph-s board--qna-content">${item.content.length > 30 ? item.content.slice(0, 30) + "..." : item.content}</p>

        <section class="board--flex">
          <p class="paragraph-s">${item.location}</p>
          <p class="paragraph-s">• 몇일 전</p>
          <p class="paragraph-s">• 조회 123</p>
        </section>
      </div>
    ` 
    insertFirst(container, template);
  })
}

export async function renderQuestionPostInfo(container, id) {
  const data = await getOneData(id, 'posts');
  let user;
  getUserData(data.created_by).then((creator) => {
    user = creator;
    getUserProfilePicture(user).then((imageURL) => {
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
          <img src=${imageURL} alt="유저 사진" />
          
          <div>
            <div>
              <span class="board--post-info-creator-username label-m">${user.user_nickname}</span>
              <span class="board--post-info-creator-role">모임장</span>
            </div>
            <p class="board--post-info-creator-info">연남동 인증 4회</p>
          </div>
          
        </figure>
    
        <button class="board--fixed-button">
          생각하기
        </button>
      
      </div>
      `
      insertFirst(container, template);
    })
    .catch(() => {
      const template = /* html */ 
      `
      <div class="board--post-info">
        <figure class="board--post-info-badge">
          <span>🧀</span>
          <figcaption>${data.type}</figcaption>
        </figure>
    
        <div role="header">
          <span class="label-l" style=${data.status === "모집중" ? "color:#5A85EE;" : "color:#919191;"}>${data.status}</span>
          <h1 class="label-l">${data.title}</h1>
          <figure class="board--post-info-requirements">
            <img src="/src/assets/icons/board/people.svg" alt="" />
            <figcaption class="paragraph-m">${data.requirements}</figcaption>
          </figure>
          <figure class="board--post-info-requirements">
            <img src="/src/assets/icons/board/fullCalendar.svg" alt="" />
            <figcaption class="paragraph-m">스터디</figcaption>
          </figure>
        </div>
    
        <p class="paragraph-m">${data.content}</p>
    
        <h3 class="label-m">참여중인 이웃 ${data.curr_people}/${data.max_people}</h3>
    
        <figure class="board--post-info-creator">
          <div class="board--post-info-creator-placeholder"></div>
          
          <div>
            <div>
              <span class="board--post-info-creator-username label-m">${user.user_nickname}</span>
              <span class="board--post-info-creator-role">모임장</span>
            </div>
            <p class="board--post-info-creator-info">연남동 인증 4회</p>
          </div>
          
        </figure>
    
        <button class="board--fixed-button">
          참여하기
        </button>
      
      </div>
      `
      insertFirst(container, template);
    })
  })
}
