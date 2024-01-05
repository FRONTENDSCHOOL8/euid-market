import togetherData from "../../temp_data/together.json";
import { insertLast } from "/src/lib/index.js";

const data = togetherData[1];  // temporary for testing
export function renderPostInfo(container) {
  const template = /* html */ 
  `
  <div class="board--post-info">
    <figure>
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
  
  </div>
  `

  insertLast(container, template);
}