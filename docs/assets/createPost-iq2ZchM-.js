import{g as t,b as x,i as b}from"./tiger-uvPuI86Z.js";import{r as C}from"./renderTopBar-BHiepWVN.js";import{c as B,a as q,b as k}from"./relocate-F3crD4p_.js";import{r as d,a as c}from"./classList-WMK_0JNQ.js";import"./pocketbase-zYAbJ1uT.js";import{g as p}from"./index-35H_NU9g.js";function y(o){b(o,`
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
  `)}function D(o){b(o,`
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
  `)}function E(){const o="모집중",e=t("#board--category").value,n="연남동",r=t("#board--post-title").value,a=t("#board--post-requirement-gender").textContent,s=t("#board--post-requirement-age").textContent;let i;a==="누구나"&&s==="누구나"?i="누구나":a==="누구나"?i=s:s==="누구나"?i=a:i=`${a}, ${s}세 이상`;const u=new Date(t("#board--post-date").value),g=`${`${u.getFullYear()}년 ${u.getMonth()+1}월 ${u.getDate()}일`}, ${t("#board--post-time").value} 시`,m=Number(t("#board--people-count").textContent),v=1,f=t("#board--post-content").value,l=B({status:o,type:e,location:n,title:r,requirements:i,time:g,max_people:m,curr_people:v,content:f});for(const h in l)if(l[h]===""){alert("모두 채워주세요");return}q(l),k("../boardContent/index.html")}function L(o){o.preventDefault();const e=o.target.closest("button"),n=t("#board--post-requirement-gender");if(!e)return;const r=t(".board--require-button-container");for(const a of r.children)d(a,"board--button-active");c(e,"board--button-active"),n.textContent=e.textContent}function P(){let o=t("#board--people-count"),e=Number(o.textContent);e!==100&&(e=++e,o.textContent=e.toString())}function $(){let o=t("#board--people-count"),e=Number(o.textContent);e!==0&&(e=--e,o.textContent=e.toString())}function w(){const o=t(".board--create-post-page.one"),e=t(".board--create-post-page.two"),n=t("#board--next-data"),r=t("#board--prev-data"),a=t("#board--submit-data");c(o,"hidden"),c(n,"hidden"),d(r,"hidden"),d(a,"hidden"),d(e,"hidden"),p.to(".board--create-post-page.one",{x:-1e3,duration:.5}),p.from(".board--create-post-page.two",{x:1e3,duration:.5})}function N(){const o=t(".board--create-post-page.one"),e=t(".board--create-post-page.two"),n=t("#board--next-data"),r=t("#board--prev-data"),a=t("#board--submit-data");c(e,"hidden"),c(r,"hidden"),c(a,"hidden"),d(o,"hidden"),d(n,"hidden"),p.to(".board--create-post-page.one",{x:0,duration:.5}),p.to(".board--create-post-page.two",{x:0,duration:.5})}(function(){const o=t(".board--create-post-container");x(o,C("blank")),y(o),D(o);const e=t(".board--create-plus-count"),n=t(".board--create-minus-count"),r=t("#board--next-data"),a=t("#board--prev-data"),s=t("#board--submit-data");t(".board--require-button-container").addEventListener("click",L),r.addEventListener("click",w),a.addEventListener("click",N),s.addEventListener("click",E),e.addEventListener("click",P),n.addEventListener("click",$)})();
