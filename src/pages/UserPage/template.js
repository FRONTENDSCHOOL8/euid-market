import pencil from '/src/assets/icons/profile/pencil.svg';
import rightDirection from '/src/assets/icons/profile/rightDirection.svg';
import polygon from '/src/assets/icons/profile/Polygon.svg';
import people from '/src/assets/icons/profile/people.svg';
import close from '/src/assets/icons/profile/close.svg';
import { confirmInput } from '/src/pages/UserPage/utils/confirmInput.js';

/* -------------------------------------------------------------------------- */
/*                                    유저페이지                                   */
/* -------------------------------------------------------------------------- */
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
  <a><img src="/src/assets/icons/profile/information.svg" alt=""
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
export function profilePublicButtonTemplate(gender_is_public, age_is_public) {
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
  <button type="button"   class="profile--modify-private ${
    !age_is_public ? 'is-active' : ''
  }" data-is_public =false>비공개</button>
  <button type="button" class="profile--modify-public  ${
    age_is_public ? 'is-active' : ''
  }" data-is_public =true>전체공개</button>
</div>
</li>`;
}

export function profileExposureDetailTermsTemplate() {
  return /*html*/ `<span class="profile--exposure-terms-detail">이듬엔터는 서비스 이용 과정에서 회원의 간략한 정보를 공개할 수 있는 프로필 서비스를 제공합니다.
  프로필 서비스는 회원이 직접 입력한 정보를 기반으로 회원의 선택에 따라 다른 이용자에게 공개될 수 있으며, 회원은 프로필 공개 여부를 서비스 내에서 언제든지 설정할 수 있습니다.</span>`;
}

export function profileModifySubmitErrorTemplate() {
  return /*html */ `<p class="profile--submit-error-message">모든 약관을 동의해주셔야 수정이 가능합니다. </p>`;
}
//팝업템플릿
export function profileSaveTemplate() {
  return /*html*/ `
  <div class="profile--modify-save-alert">
    <h2>저장완료!</h2>
    <p>
      내 질문&답변의 프로필 카드, 프로필 홈에서 변경된 프로필 정보를 확인 할
      수 있어요.
    </p>
    <button type="button" class="profile--modify-confirm">확인</button>
</div>`;
}

//기사자격증 템플릿
export function profileCertificationSelectTemplate() {
  return /*html */ `
  <div class="profile--modify-select-form">
  <div class="profile--modify-select-form-title">
    <h2>기사자격증 등록하기</h2>
    <button type="button">
      <img src=${close} alt="" />
    </button>
  </div>
  <div class="profile--modify-select-contents-wrapper">
    <!--한글 자음 버튼들를 담는 ul -->
  <ul class="profile--modify-certification-consonants">
    
    </ul>
    <!--자격증요소를 담는 ul -->
    <ul class="profile--modify-certification-list">
    
    </ul>
    <p class="profile--modify-selected-certifiaction"></p>
    <button>저장</button>
  </div>
</div>`;
}
//기사자격증 자읍 버튼 템플릿
export function profileConsonantTemplate(item) {
  return /*html */ `<li class="profile--consonant-element" data-certiciation-consonant="${item}"><button class="profile--consonant-element">${item}</button></li>`;
}
//기사자격증 리스트 템플릿
export function profileCertificationTemplate(item) {
  return /*html */ `
  <li class="profile--certification-element" data-certification-Name="${item}" >
    <input id="${item}" type="checkbox"  />
    <label for="${item}">${item}</label>
</li>`;
}
