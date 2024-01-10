import pencil from '/src/assets/icons/profile/pencil.svg';
import rightDirection from '/src/assets/icons/profile/rightDirection.svg';
import polygon from '/src/assets/icons/profile/Polygon.svg';
import people from '/src/assets/icons/profile/people.svg';

import { confirmInput } from '/src/pages/UserPage/confirmInput.js';

//프로필메뉴
export function profileMenuTemplate(userobj) {
  let { id, user_photo, user_nickname, user_year } = userobj;
  return /*html */ `
<figure>
<div class="user--profile-picture-wrapper">
  <img
    class="user--profile-picture"
    src="${import.meta.env.VITE_PB_URL}/api/files/users/${id}/${user_photo}"
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
    <img src=${polygon} alt="polygon" />
  </span>
  <span class="user--temperture">${userTemperature}℃ ${
    userTemperature < 36 ? '🙂' : '😎'
  }</span>
  <progress id="temperature" value="${userTemperature}" max="100">${userTemperature}℃</progress>
</div>`;
}

//뱃지
//(li 요소(활동배지) 다음으로 넣을 div 템플릿)
export const badgeListTemplate = /*html */ `  
<div class="user--profile-badge-detail is-active"><div>`;
//뱃지 각자 요소
export function badgeTemplate(imgSrc, badgeTitle) {
  return /* html */ `
        <figure>
          <img src="${imgSrc}" />
          <figcaption><p>${badgeTitle}</p></figcaption>
       </figure> 
    `;
}

// 매너평가
export const mannerListTemplate = /*html */ `<div class="user--profile-manner-wrapper "> </div>`;
export function mannerTemplate(count, manner_title) {
  return /* html */ `
      <div class="user--profile-manner-detail">
          <img src=${people} alt="" />
          <span>${count}</span><p>${manner_title}</p> 
      </div>`;
}

/* -------------------------------------------------------------------------- */
/*                                    프로필카드                                   */
/* -------------------------------------------------------------------------- */

export function profileCardUserInfoTemplate(userInfoObj) {
  let {
    id,
    user_nickname: nickname,
    user_year: year,
    user_photo,
  } = userInfoObj;
  return /*html */ `
    <figure>
      <figcaption>
        <p>${nickname}</p>
        <span>${year}기</span>
      </figcaption>
      
      <img src="${
        import.meta.env.VITE_PB_URL
      }/api/files/users/${id}/${user_photo}" alt="" />
    </figure>
  `;
}

export function profileCardBasicInfosTemplate(userInfoObj) {
  let {
    id,
    user_photo,
    user_job: job,
    user_age: age,
    user_gender: gender,
    user_nickname: nickname,
    user_organization: organization,
    user_certification: centertification,
  } = userInfoObj;
  return /*html */ `<div>
  <h2>기본 정보</h2>
  <a href="/src/pages/UserPage/children_pages/profileModify/index.html">수정하기</a>
</div>
<ul>
  <li>
    <p>프로필사진</p>
    <img
      class="profile--card-user-img"
      src="${import.meta.env.VITE_PB_URL}/api/files/users/${id}/${user_photo}"
      alt=""
    />
  </li>
  <li>
    <p>이름(별명)</p>
    <span>${nickname}</span>
  </li>
  <li>
    <p>하는일</p>
    <span>${confirmInput(job)}</span>
  </li>
  <li>
    <p>프로필 키워드</p>
    <span>미입력</span>
  </li>
  <li>
    <p>성별</p>
    <span>${confirmInput(gender)}</span>
  </li>
  <li>
    <p>연령</p>
    <span>${confirmInput(age)}</span>
  </li>
  <li>
    <p>회사 / 학교</p>
    <span>${confirmInput(organization)}</span>
  </li>
  <li>
    <p>자격</p>
    <span>${confirmInput(centertification)}</span>
  </li>
</ul>`;
}

/* -------------------------------------------------------------------------- */
/*                                  프로필 카드 수정                                 */
/* -------------------------------------------------------------------------- */
export function profilePublicButtonTemplate(privacyObj) {
  let { gender_is_public, age_is_public } = privacyObj;
  return /*html */ ` <li>
<p>성별</p>
<span>정보 공개 시, 내 답변 프로필 카드에 정보가 노출됩니다.</span>
<div class="profile--modify-visibility profile--gender-is-public" data-type="gender">
  <button type="button" data-is_public = false class="profile--modify-private ${
    !gender_is_public ? 'is-active' : ''
  }" >비공개</button>
  <button type="button" data-is_public = true class="profile--modify-public  ${
    gender_is_public ? 'is-active' : ''
  } ">전체공개</button>
</div>
</li>
<li>
<p>연령</p>
<span>정보 공개 시, 내 답변 프로필 카드에 정보가 노출됩니다.</span>
<div class="profile--modify-visibility profile--age-is-public" data-type="age">
  <button type="button"  class="profile--modify-private ${
    !age_is_public ? 'is-active' : ''
  }" data-is_public =false>비공개</button>
  <button type="button"  class="profile--modify-public  ${
    age_is_public ? 'is-active' : ''
  }" data-is_public =true>전체공개</button>
</div>
</li>`;
}
