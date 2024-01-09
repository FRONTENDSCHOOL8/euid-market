import"./tiger-uvPuI86Z.js";import"./main-mp0GbRCS.js";import{p as n}from"./pocketbase-zYAbJ1uT.js";import"./renderNavBar-y5sj-VBh.js";const{localStorage:d}=window;function m(e){return new Promise((t,s)=>{e?d.removeItem(e):d.clear(),t()})}function g(e){let{id:t,user_photo:s,user_nickname:r,user_year:i}=e;return`
<figure>
<div class="user--profile-picture-wrapper">
  <img
    class="user--profile-picture"
    src="https://euid-marke.pockethost.io/api/files/users/${t}/${s}"
    alt="${r}님의 프로필 사진"
  />
  <a href=""
    ><img
      class="user--profile-modify"
      src="/src/assets/icons/profile/pencil.svg"
      alt="수정하기"
  /></a>
</div>
<figcaption>
  <p>${r}<span>${i}기</span></p>
  <span class="user--answer">답변 35 </span>
</figcaption>
</figure>
`}function b(e){return`<li class="user--profile-content user--profile-badge">
  <span>활동배지 ${e.items.length}개</span>
  <button class="user--profile-more-button user--profile-badge-button">
    <img src="/src/assets//icons/profile/direction=right.svg" alt="더 보기" />
  </button>
  </li>
<li>
  <span>판매상품 0개</span>
  <button>
    <img src="/src/assets//icons/profile/direction=right.svg" alt="더 보기" />
  </button>
</li>
<li class="user--profile-content user--profile-manner" >
  <span>받은 매너평가</span>
  <button class="user--profile-more-button user--profile-manner-button">
    <img src="/src/assets//icons/profile/direction=right.svg" alt="더 보기" />
  </button>
</li>
<li>
  <span>받은 거래 후기 0개</span>
  <button>
    <img src="/src/assets//icons/profile/direction=right.svg" alt="더 보기" />
  </button>
 
</li>
`}function v(e){return`
  <li><a href="">보관질문</a></li>
  <li><a>설정</a></li>
  <li><a>지식 iN 공식 블로그</a></li>
  <li><a>서비스 정보</a></li>
  <li><a>공지사항</a></li>
  <li><button class="user--logout">
    <span>로그아웃</span> </button>
    <span class="user--logout-nickname">${e}</span>
   
  </li>`}function L(e){return` <label for="temperature"
  >열정온도
  <a href=""
    ><img src="/src/assets/icons/profile/information.svg" alt=""
  /></a>
</label>
<div class="user--temperature-progressbar-wrapper">
  <span class="user--default-temperture"
    >첫 온도 36.5℃
    <img src="/src/assets/icons/profile/Polygon.svg" alt="" />
  </span>
  <span class="user--temperture">${e}℃ ${e<36?"🙂":"😎"}</span>
  <progress id="temperature" value="${e}" max="100">${e}℃</progress>
</div>`}function _(e,t){return`
        <a href="/">
          <figure>
            <img src="${e}" />
            <figcaption><p>${t}</p></figcaption>
          </figure> 
        </a>
    `}function y(e,t){return`
      <div class="user--profile-manner-detail">
          <img src="/src//assets/icons/profile/people.svg" alt="" />
          <span>${e}</span><p>${t}</p> 
      </div>`}const l="bexmuprbriobf8v";(async()=>{const e=(await n.collection("users").getList(1,50,{filter:`id = "${l}" `})).items[0],t=await n.collection("user_badge").getList(1,50,{filter:`user_id= "${l}"`}),s=document.querySelector(".user--profile-menu"),r=document.querySelector(".user--profile-contents"),i=document.querySelector(".user--contents");s.insertAdjacentHTML("afterbegin",g(e)),document.querySelector(".user--profile-temperture").insertAdjacentHTML("afterbegin",L(e.user_temperature)),r.insertAdjacentHTML("afterbegin",b(t)),i.insertAdjacentHTML("afterbegin",v(e.user_nickname));const c=document.querySelector(".user--logout");function u(){n.authStore.clear(),m("auth"),window.location.reload()}c.addEventListener("click",u)})();const p=document.querySelector(".user--profile-badge"),a=document.querySelector(".user--profile-badge-button");async function w(){const e=`  
      <div class="user--profile-badge-detail is-active"><div>`;Array.from(a.classList).includes("is-active")?(a.classList.remove("is-active"),document.querySelector(".user--profile-badge-detail").style="display:none",p.classList.remove("is-active")):(a.classList.add("is-active"),p.classList.add("is-active"),p.insertAdjacentHTML("afterend",e),(await n.collection("user_badge_join_view").getList(1,50,{filter:`user_id= "${l}" `})).items.forEach(s=>{let{id:r,badge_img:i,badge_title:c}=s;const u=`https://euid-marke.pockethost.io/api/files/user_badge_join_view/${r}/${i}`;document.querySelector(".user--profile-badge-detail").insertAdjacentHTML("afterbegin",_(u,c))}))}const o=document.querySelector(".user--profile-manner-button"),f=document.querySelector(".user--profile-manner");async function $(){const e='<div class="user--profile-manner-wrapper "> </div>';if(Array.from(o.classList).includes("is-active"))o.classList.remove("is-active"),document.querySelector(".user--profile-manner-wrapper").style="display:none",f.classList.remove("is-active");else{f.insertAdjacentHTML("afterend",e),o.classList.add("is-active"),document.querySelector(".user--profile-manner").classList.add("is-active");const t=(await n.collection("user_manner_join_view").getList(1,50,{filter:`user_id= "${l}" `})).items;!t.length==0&&t.forEach(s=>{console.log(s);let{manner_title:r,countManner:i}=s;document.querySelector(".user--profile-manner-wrapper").insertAdjacentHTML("afterbegin",y(i,r))})}}a.addEventListener("click",w);o.addEventListener("click",$);
