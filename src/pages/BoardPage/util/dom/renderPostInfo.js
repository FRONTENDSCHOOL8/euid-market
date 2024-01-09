// import togetherData from "../../temp_data/together.json";
import { insertLast } from "/src/lib/index.js";
import pb from "/src/lib/api/pocketbase.js";
// import { getData } from "../data/handleData";
// import PocketBase from "pocketbase";

// const response = await getData();


// const data = response[2];  // temporary for testing
export async function renderPostInfo(container, id) {
  
  const data = await pb.collection('posts').getOne(id);

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
      <figure>
        <img src="/src/assets/icons/board/people.svg" alt="" />
        <figcaption class="paragraph-m">${data.requirements}</figcaption>
      </figure>
      <figure>
        <img src="/src/assets/icons/board/fullCalendar.svg" alt="" />
        <figcaption class="paragraph-m">스터디</figcaption>
      </figure>
    </div>

    <p class="paragraph-m">${data.content}</p>

    <h3 class="label-m">참여중인 이웃 ${data.curr_people}/${data.max_people}</h3>

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
  `

  insertLast(container, template);
}