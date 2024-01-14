import { renderTopBar } from "/src/components/general/renderTopBar.js";
import { getNode, insertBefore, insertLast } from "/src/lib/index.js";
import { addClass, addData, createData, relocateHREF, removeClass, dropDown, pickCategory } from "../../util/index.js";
import { gsap } from 'gsap';
import minus from "/src/assets/icons/board/minusCount.svg";
import plus from "/src/assets/icons/board/plusCount.svg";
import fullCalendar from "/src/assets/icons/board/fullCalendar.svg";
import people from "/src/assets/icons/board/people.svg";
import clock from "/src/assets/icons/board/clock.svg";

function renderCreateFirst(container) { 
  const template = /* html */
  `
  <main class="board--create-post-page one">
    <form action="/" method="post" name="title-category">
      <input type="text" placeholder="제목을 입력해주세요" id="board--post-title">

      <div class="board--create-category-container">
    <button type="button" class="board--create-category-wrapper">
      <p class="label-m board--create-category-value">프로젝트</p>
      <img src="/rightArrow.svg" alt="">
    </button>
    <ul class="board--create-category hidden">
      <li>
        <button type="button" class="label-m" data-label="project">프로젝트</button>
      </li>
      <li>
        <button type="button" class="label-m" data-label="offline">오프라인</button>
      </li>
      <li>
        <button type="button" class="label-m" data-label="study">스터디</button>
      </li>
      <li>
        <button type="button" class="label-m" data-label="contest">공모전</button>
      </li>
    </ul>
  </div>

      <textarea name="post" id="board--post-content" placeholder="활동 내용을 입력해주세요"></textarea>
    </form>

    <div>
      <figure>
        <img src=${people} alt="">
        <span class="paragraph-m">인원</span>
      </figure>

      <div>
        <button class="board--create-minus-count"><img src=${minus} alt="Minus"></button>
        <span id="board--people-count">4</span><span>명</span>
        <button class="board--create-plus-count"><img src=${plus} alt="Minus"></button>
      </div>
    </div>

    <div>
      <figure>
        <img src=${fullCalendar} alt="">
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
        <img src=${clock} alt="">
        <span class="paragraph-m">시간</span>
      </figure>

      <input type="time" id="board--post-time"/>
    
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


  </div>
  `
  insertLast(container, template);
}

async function insertData() {
  const status = "모집중";
  const type = getNode(".board--create-question-category-value").textContent;
  const location = "연남동";
  const title = getNode("#board--post-title").value;
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
  const date = new Date(getNode("#board--post-date").value);
  const formattedDate = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  const time =  `${formattedDate}, ${getNode("#board--post-time").value} 시`;
  const max_people = Number(getNode('#board--people-count').textContent);
  const curr_people = 1;
  const content = getNode("#board--post-content").value;
  const category = "같이해요";

  const data = createData({
    status,
    type,
    location,
    title,
    requirements,
    time,
    max_people,
    curr_people,
    content,
    category
  })

  for(const item in data) {
    if(data[item] === "") {
      alert("모두 채워주세요")
      return;
    }
  }

  await addData(data);
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

function handleCount(option) {
  let count = getNode('#board--people-count');
  let countNum = Number(count.textContent);
  
  countNum = option === "add" ? ++countNum : --countNum;   
  if(countNum === 100 || countNum === 0) return;
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
  const categoryContainer = getNode(".board--create-category-container");
  const categoryList = getNode(".board--create-category"); 
  
  categoryContainer.addEventListener('click', dropDown);
  categoryList.addEventListener('click', pickCategory);
  buttonContainer.addEventListener("click", handleRequirement);
  nextButton.addEventListener("click", nextPage);
  prevButton.addEventListener("click", prevPage);
  submitButton.addEventListener("click", insertData);
  increaseButton.addEventListener("click", () => handleCount("add"));
  decreaseButton.addEventListener("click", () => handleCount("sub"));
})();

