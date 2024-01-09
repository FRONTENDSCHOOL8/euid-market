import pencil from '/src/assets/icons/profile/pencil.svg';
import rightDirection from '/src/assets/icons/profile/rightDirection.svg';
import polygon from '/src/assets/icons/profile/polygon.svg';
import people from '/src/assets/icons/profile/people.svg';

//프로필메뉴
export function profileMenuTemplate(userobj) {
  let { id, user_photo, user_nickname, user_year } = userobj;
  return /*html */ `
<figure>
<div class="user--profile-picture-wrapper">
  <img
    class="user--profile-picture"
    src="${import.meta.env.VITE_PB_URL}api/files/users/${id}/${user_photo}"
    alt="${user_nickname}님의 프로필 사진"
  />
  <a href="/src/pages/Userpage/children_pages/profileCard/index.html"
    ><img
      class="user--profile-modify"
      src=${pencil}
      alt="수정하기"
  /></a>
</div>
<figcaption>
  <p>${user_nickname}<span>${user_year}기</span></p>
  <span class="user--answer">답변 35 </span>
</figcaption>
</figure>
`;
}
// 프로필 컨텐츠 템플릿
export function profileContentsTemplate(userBadgeResult) {
  return /*html */ `<li class="user--profile-content user--profile-badge">
  <span>활동배지 ${userBadgeResult.items.length}개</span>
  <button class="user--profile-more-button user--profile-badge-button">
    <img src=${rightDirection} alt="더 보기" />
  </button>
  </li>
<li>
  <span>판매상품 0개</span>
  <button>
    <img src=${rightDirection} alt="더 보기" />
  </button>
</li>
<li class="user--profile-content user--profile-manner" >
  <span>받은 매너평가</span>
  <button class="user--profile-more-button user--profile-manner-button">
    <img src=${rightDirection}  alt="더 보기" />
  </button>
</li>
<li>
  <span>받은 거래 후기 0개</span>
  <button>
    <img src=${rightDirection}  alt="더 보기" />
  </button>
 
</li>
`;
}

//프로필 기본 메뉴
export function profileSubContentsTemplate(nickname) {
  return /*html */ `
  <li><a href="">보관질문</a></li>
  <li><a>설정</a></li>
  <li><a>지식 iN 공식 블로그</a></li>
  <li><a>서비스 정보</a></li>
  <li><a>공지사항</a></li>
  <li><button class="user--logout">
    <span>로그아웃</span> </button>
    <span class="user--logout-nickname">${nickname}</span>
   
  </li>`;
}

// 열정온도
export function userTemperatureTemplate(userTemperature) {
  return /* html */ ` <label for="temperature"
  >열정온도
  <a href=""
    ><img src="/src/assets/icons/profile/information.svg" alt=""
  /></a>
</label>
<div class="user--temperature-progressbar-wrapper">
  <span class="user--default-temperture"
    >첫 온도 36.5℃
    <img src=${polygon} alt="" />
  </span>
  <span class="user--temperture">${userTemperature}℃ ${
    userTemperature < 36 ? '🙂' : '😎'
  }</span>
  <progress id="temperature" value="${userTemperature}" max="100">${userTemperature}℃</progress>
</div>`;
}

//뱃지
export function badgeTemplate(imgSrc, badgeTitle) {
  return /* html */ `
        <a href="/">
          <figure>
            <img src="${imgSrc}" />
            <figcaption><p>${badgeTitle}</p></figcaption>
          </figure> 
        </a>
    `;
}
// 매너평가
export function mannerTemplate(count, manner_title) {
  return /* html */ `
      <div class="user--profile-manner-detail">
          <img src=${people} alt="" />
          <span>${count}</span><p>${manner_title}</p> 
      </div>`;
}
