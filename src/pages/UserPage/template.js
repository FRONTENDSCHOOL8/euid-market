//프로필메뉴
export function profileMenuTemplate(userobj) {
  let { id, userPicture, nickname, userYear } = userobj;
  return /*html */ `
<figure>
<div class="user--profile-picture-wrapper">
  <img
    class="user--profile-picture"
    src="http://127.0.0.1:8090/api/files/users/${id}/${userPicture}"
    alt="${nickname}님의 프로필 사진"
  />
  <a href=""
    ><img
      class="user--profile-modify"
      src="/src/assets/icons/profile/pencil.svg"
      alt="수정하기"
  /></a>
</div>
<figcaption>
  <p>${nickname}<span>${userYear}기</span></p>
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
    <img src="/src/assets/icons/profile/Polygon.svg" alt="" />
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
          <img src="/src//assets/icons/profile/people.svg" alt="" />
          <span>${count}</span><p>${manner_title}</p> 
      </div>`;
}
