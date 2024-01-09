import './user.css';
import {
  mannerTemplate,
  badgeTemplate,
  profileMenuTemplate,
  userTemperatureTemplate,
  profileContentsTemplate,
  profileSubContentsTemplate,
} from './template.js';
import { deleteStorage } from '/src/lib/';
import pb from '/src/lib/api/pocketbase';

const TEST_USER_ID = 'bexmuprbriobf8v';

/* -------------------------------------------------------------------------- */
/*                             랜더링 후 즉시 실행                                */
/* -------------------------------------------------------------------------- */

(async () => {
  //유저 정보 가져오기
  const userInfoResult = (
    await pb
      .collection('users')
      .getList(1, 50, { filter: `id = "${TEST_USER_ID}" ` })
  ).items[0];
  
  // 배지 정보 가져오기
  const userBadgeResult = await pb.collection('user_badge').getList(1, 50, {
    filter: `user_id= "${TEST_USER_ID}"`,
  });
  
  const userProfile = document.querySelector('.user--profile-menu');
  const userProfileContents = document.querySelector('.user--profile-contents');
  const userProfileSubContents = document.querySelector('.user--contents');
  //최상단 프로필
  userProfile.insertAdjacentHTML(
    'afterbegin',
    profileMenuTemplate(userInfoResult)
  );
  //열정온도
  document
    .querySelector('.user--profile-temperture')
    .insertAdjacentHTML(
      'afterbegin',
      userTemperatureTemplate(userInfoResult.user_temperature)
    );
  // 프로필 컨텐츠( 배지, 상품, 매너평가, 거래 후기)
  userProfileContents.insertAdjacentHTML(
    'afterbegin',
    profileContentsTemplate(userBadgeResult)
  );
  userProfileSubContents.insertAdjacentHTML(
    'afterbegin',
    profileSubContentsTemplate(userInfoResult.user_nickname)
  );
  
  //로그아웃
  const logoutButton = document.querySelector('.user--logout');
  function handleLogout() {
    pb.authStore.clear();
    deleteStorage('auth');
    window.location.reload();
  }
  logoutButton.addEventListener('click', handleLogout);
})();


/* -------------------------------------------------------------------------- */
/*                                더 보기 클릭이벤트                                 */
/* -------------------------------------------------------------------------- */

// 뱃지 더 보기
const userProfileBadgeList = document.querySelector('.user--profile-badge');
const userProfileBadgeButton = document.querySelector(
  '.user--profile-badge-button'
);

async function showBadge() {
  //li 요소(활동배지) 다음으로 넣을 div 템플릿
  const badgeListTemplate = /*html */ `  
      <div class="user--profile-badge-detail is-active"><div>`;
  if (!Array.from(userProfileBadgeButton.classList).includes('is-active')) {
    userProfileBadgeButton.classList.add('is-active');
    userProfileBadgeList.classList.add('is-active');
    userProfileBadgeList.insertAdjacentHTML('afterend', badgeListTemplate);
    const badge_view = (
      await pb.collection('user_badge_join_view').getList(1, 50, {
        filter: `user_id= "${TEST_USER_ID}" `,
      })
    ).items;
    badge_view.forEach((item) => {
      let { id, badge_img, badge_title } = item;
      const imgUrl = `${
        import.meta.env.VITE_PB_URL
      }/api/files/user_badge_join_view/${id}/${badge_img}`;
      document
        .querySelector('.user--profile-badge-detail')
        .insertAdjacentHTML('afterbegin', badgeTemplate(imgUrl, badge_title));
    });
  } else {
    userProfileBadgeButton.classList.remove('is-active');
    document.querySelector('.user--profile-badge-detail').style =
      'display:none';
    userProfileBadgeList.classList.remove('is-active');
  }
}

// 거래후기 더 보기
const userProfileMannerButton = document.querySelector(
  '.user--profile-manner-button'
);
const userProfileMannerList = document.querySelector('.user--profile-manner');
async function showManner() {
  const mannerListTemplate = /*html*/ `<div class="user--profile-manner-wrapper "> </div>`;
  if (!Array.from(userProfileMannerButton.classList).includes('is-active')) {
    userProfileMannerList.insertAdjacentHTML('afterend', mannerListTemplate);
    userProfileMannerButton.classList.add('is-active');
    document.querySelector('.user--profile-manner').classList.add('is-active');
    // pocektbase 데이터 리스트 불러오기
    const manner_view = (
      await pb.collection('user_manner_join_view').getList(1, 50, {
        filter: `user_id= "${TEST_USER_ID}" `,
      })
    ).items;
    if (!manner_view.length == 0) {
      manner_view.forEach((item) => {
        console.log(item);
        let { manner_title, countManner: count } = item;
        document
          .querySelector('.user--profile-manner-wrapper')
          .insertAdjacentHTML(
            'afterbegin',
            mannerTemplate(count, manner_title)
          );
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
