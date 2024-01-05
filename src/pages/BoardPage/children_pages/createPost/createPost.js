import { renderTopBar } from "/src/components/general/renderTopBar.js";
import { getNode, insertBefore, insertLast } from "/src/lib/index.js";

const createPostContainer = getNode(".board--create-post-container");

function renderCreateFirst(container) { 
  
  const template = /* html */
  `
  <main class="board--create-post-page one hidden">
    <form action="/" method="post">
      <input type="text" placeholder="제목을 입력해주세요" id="board--post-title">

      <select name="board--category" id="board--category">
        <option value="">카테고리를 선택해주세요</option>
        <option value="study">스터디</option>
        <option value="project">프로젝트</option>
        <option value="offline">오프라인</option>
        <option value="competition">공모전</option>
      </select>

      <textarea name="post" id="post-content" placeholder="활동 내용을 입력해주세요"></textarea>
    </form>

    <div>
      <figure>
        <img src="/src/assets/icons/board/people.svg" alt="">
        <span class="paragraph-m">인원</span>
      </figure>

      <div>
        <button class="board--create-minus-count"><img src="/src/assets/icons/board/minusCount.svg" alt="Minus"></button>
        <span id="board--people-count">4명</span>
        <button class="board--create-minus-count"><img src="/src/assets/icons/board/plusCount.svg" alt="Minus"></button>
      </div>
    </div>

    <div>
      <figure>
        <img src="/src/assets/icons/board/fullCalendar.svg" alt="">
        <span class="paragraph-m">날짜</span>
      </figure>

      <span>오늘</span>
    </div>

    <div>
      <figure>
        <img src="/src/assets/icons/board/clock.svg" alt="">
        <span class="paragraph-m">시간</span>
      </figure>

      <span>오후 8:00</span>
    </div>

    <div>
      <figure>
        <img src="/src/assets/icons/board/people.svg" alt="">
        <span class="paragraph-m">장소</span>
      </figure>

      <span>입력해주세요</span>
    </div>
    
    <button class="board--fixed-button">다음</button>
  </main>
  `
  insertLast(container, template);
}

// function renderCreateSecond() {

// }


insertBefore(createPostContainer, renderTopBar("blank"));
renderCreateFirst(createPostContainer);