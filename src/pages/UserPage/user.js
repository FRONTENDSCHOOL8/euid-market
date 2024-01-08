import './user.css';

import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

const TEST_USER_ID = 'c24hzewie4gweri';

/* -------------------------------------------------------------------------- */
/*                             랜더링 후 즉시 실행                                */
/* -------------------------------------------------------------------------- */

//유저 정보 가져오기
const userInfoResult = await pb.collection('users').getList(1, 50, {
  filter: `id= "${TEST_USER_ID}" `,
});

// 배지 정보 가져오기
const userBadgeResult = await pb.collection('user_badge').getList(1, 50, {
  filter: `user_id= "${TEST_USER_ID}"`,
});

let { id, userPicture, nickname, userYear, userTemperature } =
  userInfoResult.items[0];

// 프로필 메뉴(유저 사진, 수정하기, 답변)
const profileMenuTemplate = /*html */ `
<figure>
<div class="user--profile-picture-wrapper">
  <img
    class="user--profile-picture"
    src="http://127.0.0.1:8090/api/files/users/${id}/${userPicture}"
    alt="별명 사진"
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

const userProfile = document.querySelector('.user--profile-menu');
userProfile.insertAdjacentHTML('afterbegin', profileMenuTemplate);

//열정온도
const profileTemperatureTemplate = /* html */ `
  <label for="temperature"
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

document
  .querySelector('.user--profile-temperture')
  .insertAdjacentHTML('afterbegin', profileTemperatureTemplate);

//프로필 컨텐츠
const porfileContentsTemplate = /* html */ `
<li class="user--profile-content user--profile-badge">
  <span>활동배지 ${userBadgeResult.items.length}개</span>
  <button class="user--profile-more-button user--profile-badge-button">
    <img src="/src/assets//icons/profile/direction=right.svg" alt="더 보기" />
  </button>
  </li>
<li>
  <span>판매상품 3개</span>
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
  <span>받은 거래 후기 1개</span>
  <button>
    <img src="/src/assets//icons/profile/direction=right.svg" alt="더 보기" />
  </button>
 
</li>`;

const userProfileContents = document.querySelector('.user--profile-contents');
userProfileContents.insertAdjacentHTML('afterbegin', porfileContentsTemplate);

/* -------------------------------------------------------------------------- */
/*                                더 보기 클릭이벤트                                 */
/* -------------------------------------------------------------------------- */

// 뱃지 더 보기
const userProfileBadgeList = document.querySelector('.user--profile-badge');
const userProfileBadgeButton = document.querySelector(
  '.user--profile-badge-button'
);

async function showBadge() {
  const badgeListTemplate = /*html */ `  
      <div class="user--profile-badge-detail is-active"><div>`;

  if (!Array.from(userProfileBadgeButton.classList).includes('is-active')) {
    const badge_view = (
      await pb.collection('user_badge_join_view').getList(1, 50, {
        filter: `user_id= "${TEST_USER_ID}" `,
      })
    ).items;

    console.log(badge_view);
    userProfileBadgeButton.classList.add('is-active');
    document.querySelector('.user--profile-badge').classList.add('is-active');
    userProfileBadgeList.insertAdjacentHTML('afterend', badgeListTemplate);

    badge_view.forEach((item) => {
      console.log(item);
      let { id, badge_image, badge_title } = item;
      const url = `http://127.0.0.1:8090/api/files/user_badge_join_view/${id}/${badge_image}`;
      const badgeTemplate = /* html */ `
        <a href="/">
          <figure>
            <img src="${url}" />
            <figcaption><p>${badge_title}</p></figcaption>
          </figure> 
        </a>
    `;
      document
        .querySelector('.user--profile-badge-detail')
        .insertAdjacentHTML('afterbegin', badgeTemplate);
    });
  } else {
    userProfileBadgeButton.classList.remove('is-active');
    document.querySelector('.user--profile-badge-detail').style =
      'display:none';
    document
      .querySelector('.user--profile-badge')
      .classList.remove('is-active');
  }
}

// 거래후기 더 보기
const userProfileMannerButton = document.querySelector(
  '.user--profile-manner-button'
);
const userProfileMannerList = document.querySelector('.user--profile-manner');
async function showManner() {
  const mannerListTemplate = /*html*/ `<div class="user--profile-manner-wrapper ">  </div>`;
  if (!Array.from(userProfileMannerButton.classList).includes('is-active')) {
    userProfileMannerList.insertAdjacentHTML('afterend', mannerListTemplate);
    userProfileMannerButton.classList.add('is-active');
    document.querySelector('.user--profile-manner').classList.add('is-active');
    // pocektbase 데이터 리스트
    const manner_view = (
      await pb.collection('user_manner_join_view').getList(1, 50, {
        filter: `user_id= "${TEST_USER_ID}" `,
      })
    ).items;
    if (!manner_view.length === 0) {
      manner_view.forEach((item) => {
        console.log(item);
        let { manner_title, countManner: count } = item;
        const mannerTemplate = /* html */ `
      <div class="user--profile-manner-detail">
          <img src="/src//assets/icons/profile/people.svg" alt="" />
          <span>${count}</span><p>${manner_title}</p> 
        </div>`;
        document
          .querySelector('.user--profile-manner-wrapper')
          .insertAdjacentHTML('afterbegin', mannerTemplate);
      });
    }
  } else {
    userProfileMannerButton.classList.remove('is-active');
    document.querySelector('.user--profile-manner-wrapper').style =
      'display:none';
    userProfileMannerList.classList.remove('is-active');
  }
}

userProfileBadgeButton.addEventListener('click', showBadge);
userProfileMannerButton.addEventListener('click', showManner);
