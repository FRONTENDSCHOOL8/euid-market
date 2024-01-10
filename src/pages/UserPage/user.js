import './user.css';
import pb from '/src/lib/api/pocketbase';
import {
  mannerTemplate,
  badgeTemplate,
  mannerListTemplate,
  badgeListTemplate,
  profileMenuTemplate,
  userTemperatureTemplate,
  profileContentsTemplate,
  profileSubContentsTemplate,
} from '/src/pages/UserPage/template.js';
import { deleteStorage, getNode, insertFirst, insertAfter } from '/src/lib/';
//배포전 수정 !!!!!!!!!!!!!!!1
const TEST_USER_ID = 'c24hzewie4gweri';

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
  const userProfile = getNode('.user--profile-menu');
  const userProfileContents = getNode('.user--profile-contents');
  const userProfileSubContents = getNode('.user--contents');
  //최상단 프로필
  insertFirst(userProfile, profileMenuTemplate(userInfoResult));
  //열정온도
  insertFirst(
    getNode('.user--profile-temperture'),
    userTemperatureTemplate(userInfoResult.user_temperature)
  );
  // 프로필 컨텐츠( 배지, 상품, 매너평가, 거래 후기)
  insertFirst(userProfileContents, profileContentsTemplate(userBadgeResult));

  insertFirst(
    userProfileSubContents,
    profileSubContentsTemplate(userInfoResult.user_nickname)
  );
  //로그아웃
  const logoutButton = getNode('.user--logout');
  function handleLogout() {
    pb.authStore.clear();
    deleteStorage('auth');
    window.location.reload();
  }
  logoutButton.addEventListener('click', handleLogout);

  /* -------------------------------------------------------------------------- */
  /*                                더 보기 클릭이벤트                                 */
  /* -------------------------------------------------------------------------- */

  // 뱃지 더 보기
  const userProfileBadgeList = document.querySelector('.user--profile-badge');
  const userProfileBadgeButton = document.querySelector(
    '.user--profile-badge-button'
  );

  async function showBadge() {
    //토글 분기
    if (!Array.from(userProfileBadgeButton.classList).includes('is-active')) {
      const badge_view = (
        await pb.collection('user_badge_join_view').getList(1, 50, {
          filter: `user_id= "${TEST_USER_ID}" `,
        })
      ).items;
      userProfileBadgeButton.classList.add('is-active');
      userProfileBadgeList.classList.add('is-active');
      userProfileBadgeList.insertAdjacentHTML('afterend', badgeListTemplate);
      badge_view.forEach((item) => {
        console.log(item);
        let { id, badge_img, badge_title } = item;
        const imgUrl = `${
          import.meta.env.VITE_PB_URL
        }api/files/user_badge_join_view/${id}/${badge_img}`;
        insertFirst(
          getNode('.user--profile-badge-detail'),
          badgeTemplate(imgUrl, badge_title)
        );
      });
    } else {
      userProfileBadgeButton.classList.remove('is-active');
      userProfileBadgeList.classList.remove('is-active');
      getNode('.user--profile-badge-detail').style = 'display:none';
    }
  }

  // 거래후기 더 보기
  const userProfileMannerButton = getNode('.user--profile-manner-button');
  const userProfileMannerList = getNode('.user--profile-manner');
  async function showManner() {
    if (!Array.from(userProfileMannerButton.classList).includes('is-active')) {
      // pocektbase 데이터 리스트 불러오기
      const manner_view = (
        await pb.collection('user_manner_join_view').getList(1, 50, {
          filter: `user_id= "${TEST_USER_ID}" `,
        })
      ).items;
      insertAfter(userProfileMannerList, mannerListTemplate);
      userProfileMannerButton.classList.add('is-active');
      getNode('.user--profile-manner').classList.add('is-active');
      if (!manner_view.length == 0) {
        manner_view.forEach((item) => {
          let { manner_title, count_manner: count } = item;
          insertFirst(
            getNode('.user--profile-manner-wrapper'),
            mannerTemplate(count, manner_title)
          );
        });
      }
    } else {
      userProfileMannerButton.classList.remove('is-active');
      userProfileMannerList.classList.remove('is-active');
      getNode('.user--profile-manner-wrapper').style = 'display:none';
    }
  }

  userProfileBadgeButton.addEventListener('click', showBadge);
  userProfileMannerButton.addEventListener('click', showManner);
})();
