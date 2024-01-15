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

import { renderNavBar } from '/src/components/general/index.js';

import { getNode, insertFirst, insertAfter, sessionHandler } from '/src/lib/';
//배포전 수정 !!!!!!!!!!!!!!!1

/* -------------------------------------------------------------------------- */
/*                             랜더링 후 즉시 실행                                */
/* -------------------------------------------------------------------------- */

(async () => {
  const { id: user_id } = JSON.parse(localStorage.getItem('auth'))['user'];
  console.log(user_id);
  const userProfile = getNode('.user--profile-menu');
  const userProfileContents = getNode('.user--profile-contents');
  const userProfileSubContents = getNode('.user--contents');
  const logoutButton = getNode('.user--logout');
  const userProfileMannerList = getNode('.user--profile-manner');
  const userProfileMannerButton = getNode('.user--profile-manner-button');
  const userProfileBadgeList = getNode('.user--profile-badge');
  const userProfileBadgeButton = getNode('.user--profile-badge-button');

  sessionHandler();
  renderNavBar();

  const userInfoResult = await pb.collection('users').getOne(user_id);
  const userBadgeResult = await pb.collection('user_badge').getList(1, 50, {
    filter: `user_id= "${user_id}"`,
  });
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

  /**
   * 뱃지 더보기 토글 버튼 클릭시 발생하는 함수
   */
  async function showBadge() {
    if (!Array.from(userProfileBadgeButton.classList).includes('is-active')) {
      const badge_view = (
        await pb.collection('user_badge_join_view').getList(1, 50, {
          filter: `user_id= "${user_id}" `,
        })
      ).items;
      userProfileBadgeButton.classList.add('is-active');
      userProfileBadgeList.classList.add('is-active');
      userProfileBadgeList.insertAdjacentHTML('afterend', badgeListTemplate);
      badge_view.forEach((item) => {
        let { id, badge_img, badge_title } = item;
        const imgUrl = `${
          import.meta.env.VITE_PB_URL
        }/api/files/user_badge_join_view/${id}/${badge_img}`;
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

  /**
   * 거래후기 더보기 토글 버튼 클릭시 발생하는 함수
   */
  async function showManner() {
    if (!Array.from(userProfileMannerButton.classList).includes('is-active')) {
      // pocektbase 데이터 리스트 불러오기
      const manner_view = (
        await pb.collection('user_manner_join_view').getList(1, 50, {
          filter: `user_id= "${user_id}" `,
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
  /**
   * 로그아웃 버튼 클릭시 발생하는 함수
   */
  function handleLogout() {
    console.log('d');
    localStorage.removeItem('session');
    localStorage.removeItem('auth');
  }
  logoutButton.addEventListener('click', handleLogout);
  userProfileBadgeButton.addEventListener('click', showBadge);
  userProfileMannerButton.addEventListener('click', showManner);
})();
