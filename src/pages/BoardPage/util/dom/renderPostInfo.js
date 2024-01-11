import { insertLast } from "/src/lib/index.js";
import pb from "/src/lib/api/pocketbase.js";
import { getUserData, getUserProfilePicture } from "../index";


export async function renderPostInfo(container, id) {
  
  const data = await pb.collection('posts').getOne(id);
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
      insertLast(container, template);
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
          <div class="board--post-info-no-pic"></div>
          
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
      insertLast(container, template);
    })
  })
}