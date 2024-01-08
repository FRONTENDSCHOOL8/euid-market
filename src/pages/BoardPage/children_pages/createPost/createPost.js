import { renderTopBar } from "/src/components/general/renderTopBar.js";
import { getNode, insertBefore, insertLast } from "/src/lib/index.js";
import { addData, createData } from "../../util/index.js";

function renderCreateFirst(container) { 
  const template = /* html */
  `
  <main class="board--create-post-page one">
    <form action="/" method="post">
      <input type="text" placeholder="제목을 입력해주세요" id="board--post-title">

      <select name="board--category" id="board--category">
        <option value="">카테고리를 선택해주세요</option>
        <option value="스터디">스터디</option>
        <option value="프로젝트">프로젝트</option>
        <option value="오프라인">오프라인</option>
        <option value="공모전">공모전</option>
      </select>

      <textarea name="post" id="board-post-content" placeholder="활동 내용을 입력해주세요"></textarea>
    </form>

    <div>
      <figure>
        <img src="/src/assets/icons/board/people.svg" alt="">
        <span class="paragraph-m">인원</span>
      </figure>

      <div>
        <button class="board--create-minus-count"><img src="/src/assets/icons/board/minusCount.svg" alt="Minus"></button>
        <span id="board--people-count">4</span><span>명</span>
        <button class="board--create-plus-count"><img src="/src/assets/icons/board/plusCount.svg" alt="Minus"></button>
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

      <span id="">오후 8:00</span>
    </div>

    <div>
      <figure>
        <img src="/src/assets/icons/board/people.svg" alt="">
        <span class="paragraph-m">장소</span>
      </figure>

      <span>입력해주세요</span>
    </div>
    
    <button class="board--fixed-button hidden">다음</button>
  </main>
  `
  insertLast(container, template);
}


function renderCreateSecond(container) {


  const template = /* html */ 
  `
  <div class="board--create-post-page two">
    <h1 class="label-l">어떤 학생과 함께 할까요?</h1>
    <section>
      <div>
        <figure>
          <img src="/src/assets/icons/board/gender.svg" alt="">
          <figcaption>성별</figcaption>
        </figure>
        <p id="board--post-requirement">누구나</p>
      </div>

      <div>
        <span class="paragraph-s">누구나 또는 같은 성별 모임으로 설정해주세요</span>

        <div>
          <button>누구나</button>
          <button>여자만</button>
          <button>남자만</button>
        </div>
      </div>
    </section>

    <div class="board--create-option-gender">
      <figure>
        <img src="/src/assets/icons/board/people.svg" alt="">
        <span class="paragraph-m">나이</span>
      </figure>

      <div>
        <p>누구나</p>
      </div>
    </div>

    <button class="board--fixed-button" id="board--submit-data">일정 만들기</button>
  </div>
  `
  insertLast(container, template);
}

function insertData() {
  const status = "모집중";
  const type = getNode("#board--category").value;
  const location = "연남동";
  const title = getNode("#board--post-title").value;
  const requirements = getNode("#board--post-requirement").textContent;
  const time =  "오후 4시";
  const max_people = Number(getNode('#board--people-count').textContent);
  const curr_people = 1;
  const content = "check";

// debugging zone
  console.log(type);
  console.log(title);
  console.log(requirements);
  console.log(content);

  const testData = createData({
    status,
    type,
    location,
    title,
    requirements,
    time,
    max_people,
    curr_people,
    content
  })

  addData(testData);
}
// 밑에 있는 변수 코드는 클릭을 했을 때 생성되게끔 해야됨



// Run Code nested by IIFE
(function () {
  const createPostContainer = getNode(".board--create-post-container");
  insertBefore(createPostContainer, renderTopBar("blank"));
  renderCreateFirst(createPostContainer);
  renderCreateSecond(createPostContainer);

  const submitButton = getNode("#board--submit-data");
  // button event listener
  submitButton.addEventListener('click', insertData);


  const increaseButton = getNode(".board--create-plus-count");
  const decreaseButton = getNode(".board--create-minus-count");

  increaseButton.addEventListener("click", () => { 
    let count = getNode('#board--people-count');
    let countNum = Number(count.textContent);
    if(countNum === 100) return;
    countNum = ++countNum;
    count.textContent = countNum.toString();
  });
  decreaseButton.addEventListener("click", () => {
    let count = getNode('#board--people-count');
    let countNum = Number(count.textContent);
    if(countNum === 0) return;
    countNum = --countNum;
    count.textContent = countNum.toString();
  });
})();

