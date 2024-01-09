import { renderTopBar } from "/src/components/general/renderTopBar.js";
import { getNode, insertBefore, insertLast } from "/src/lib/index.js";
import { addClass, addData, createData, relocateHREF, removeClass } from "../../util/index.js";
import { gsap } from 'gsap';


function renderCreateFirst(container) { 
  const template = /* html */
  `
  <main class="board--create-post-page one">
    <form action="/" method="post" name="title-category">
      <input type="text" placeholder="제목을 입력해주세요" id="board--post-title">

      <select name="board--category" id="board--category">
        <option value="">카테고리를 선택해주세요</option>
        <option value="스터디">스터디</option>
        <option value="프로젝트">프로젝트</option>
        <option value="오프라인">오프라인</option>
        <option value="공모전">공모전</option>
      </select>

      <textarea name="post" id="board--post-content" placeholder="활동 내용을 입력해주세요"></textarea>
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

      <input 
      type="date" 
      id="board--post-date"
      max="2077-06-20"
      min="2020-01-01" />
      
    </div>

    <div>
      <figure>
        <img src="/src/assets/icons/board/clock.svg" alt="">
        <span class="paragraph-m">시간</span>
      </figure>

      <input type="time" id="board--post-time"/>
    
    </div>

    <div>
      <figure>
        <img src="/src/assets/icons/board/people.svg" alt="">
        <span class="paragraph-m">장소</span>
      </figure>

      <span>입력해주세요</span>
    </div>
    
    
  </main>
  `
  insertLast(container, template);
}

function renderCreateSecond(container) {


  const template = /* html */ 
  `
  <div class="board--create-post-page two hidden">
    <h1 class="label-l">어떤 학생과 함께 할까요?</h1>
    <section>
      <div class="board--create-option-requirements">
        <figure>
          <img src="/src/assets/icons/board/gender.svg" alt="">
          <figcaption class="paragraph-m">성별</figcaption>
        </figure>
        <p id="board--post-requirement-gender">누구나</p>
      </div>

      <div>
        <span class="paragraph-s">누구나 또는 같은 성별 모임으로 설정해주세요</span>
        <div class="board--require-button-container">
          <button class="board--button-active">누구나</button>
          <button>여자만</button>
          <button>남자만</button>
        </div>
      </div>
    </section>

    <div class="board--create-option-requirements">
      <figure>
        <img src="/src/assets/icons/board/people.svg" alt="">
        <span class="paragraph-m">나이</span>
      </figure>

      <div>
        <p id="board--post-requirement-age">누구나</p>
      </div>
    </div>

  </div>
  `
  insertLast(container, template);
}

function insertData() {
  const status = "모집중";
  const type = getNode("#board--category").value;
  const location = "연남동";
  const title = getNode("#board--post-title").value;
  
  // 참여 조건
  const gender = getNode("#board--post-requirement-gender").textContent;
  const age = getNode("#board--post-requirement-age").textContent;

  let requirements;
  if(gender === "누구나" && age === "누구나") {
    requirements = "누구나";
  } else if(gender === "누구나") {
    requirements = age;
  } else if(age === "누구나") {
    requirements = gender;
  } else {
    requirements = `${gender}, ${age}세 이상`;
  }

  // 날짜 & 시간
  const date = new Date(getNode("#board--post-date").value);
  const formattedDate = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  const time =  `${formattedDate}, ${getNode("#board--post-time").value}시`;

  // 최대 인원수
  const max_people = Number(getNode('#board--people-count').textContent);
  const curr_people = 1;

  // 게시물 내용
  const content = getNode("#board--post-content").value;


  // 데이터 객체 만들기
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

  // 만약 필요 요소 중 하나라도 비어있다면 아레 코드 미시행
  for(const item in testData) {
    if(testData[item] === "") {
      alert("모두 채워주세요")
      return;
    }
  }

  // 데이터 추가 및 페이지 이동
  addData(testData);
  relocateHREF('../boardContent/index.html');
}

function handleRequirement(e) {
  e.preventDefault();
  const target = e.target.closest("button");
  const gender = getNode("#board--post-requirement-gender");

  if(!target) return;
  
  const buttonContainer = getNode(".board--require-button-container");
  for(const child of buttonContainer.children) {
    removeClass(child, "board--button-active");
  }

  addClass(target,"board--button-active");
  gender.textContent = target.textContent;
}

function increaseMaxCount() { 
  let count = getNode('#board--people-count');
  let countNum = Number(count.textContent);
  if(countNum === 100) return;
  countNum = ++countNum;
  count.textContent = countNum.toString();
}

function decreaseMaxCount() {
  let count = getNode('#board--people-count');
  let countNum = Number(count.textContent);
  if(countNum === 0) return;
  countNum = --countNum;
  count.textContent = countNum.toString();
}

function nextPage() {
  const firstPage = getNode(".board--create-post-page.one");
  const secondPage = getNode(".board--create-post-page.two");
  const nextButton = getNode("#board--next-data");
  const prevButton = getNode("#board--prev-data");
  const submitButton = getNode("#board--submit-data");
  
  addClass(firstPage, "hidden");
  addClass(nextButton, "hidden");
  removeClass(prevButton, "hidden");
  removeClass(submitButton, "hidden");
  removeClass(secondPage, "hidden");
  
  gsap.to(".board--create-post-page.one", {x: -1000, duration: .5});
  gsap.from(".board--create-post-page.two", {x: 1000, duration: .5});
}

function prevPage() {
  const firstPage = getNode(".board--create-post-page.one");
  const secondPage = getNode(".board--create-post-page.two");
  const nextButton = getNode("#board--next-data");
  const prevButton = getNode("#board--prev-data");
  const submitButton = getNode("#board--submit-data");
  
  addClass(secondPage, "hidden");
  addClass(prevButton, "hidden");
  addClass(submitButton, "hidden");
  removeClass(firstPage, "hidden");
  removeClass(nextButton, "hidden");
  
  gsap.to(".board--create-post-page.one", {x: 0, duration: .5});
  gsap.to(".board--create-post-page.two", {x: 0, duration: .5});
}

// Run Code nested by IIFE
(function () {
  const createPostContainer = getNode(".board--create-post-container");
  insertBefore(createPostContainer, renderTopBar("blank"));
  renderCreateFirst(createPostContainer);
  renderCreateSecond(createPostContainer);

  
  const increaseButton = getNode(".board--create-plus-count");
  const decreaseButton = getNode(".board--create-minus-count");
  const nextButton = getNode("#board--next-data");
  const prevButton = getNode("#board--prev-data");
  const submitButton = getNode("#board--submit-data");
  const buttonContainer = getNode(".board--require-button-container");
  
  

  // Button Event Listeners
  buttonContainer.addEventListener("click", handleRequirement);
  nextButton.addEventListener("click", nextPage);
  prevButton.addEventListener("click", prevPage);
  submitButton.addEventListener("click", insertData);
  increaseButton.addEventListener("click", increaseMaxCount);
  decreaseButton.addEventListener("click", decreaseMaxCount);
})();

