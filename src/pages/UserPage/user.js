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
import {addClass, relocateHREF, removeClass} from '../BoardPage/util';
//배포전 수정 !!!!!!!!!!!!!!!1

/* -------------------------------------------------------------------------- */
/*                             랜더링 후 즉시 실행                                */
/* -------------------------------------------------------------------------- */

(async () => {
  localStorage.setItem("curr_page", "user");
  sessionHandler();
  renderNavBar();
  const { id: user_id } = JSON.parse(localStorage.getItem('auth'))['user'];
  const userInfoResult = await pb.collection('users').getOne(user_id, {
    expand: 'user_nickname',
  });
  const userBadgeResult = await pb.collection('user_badge').getList(1, 50, {
    filter: `user_id= "${user_id}"`,
  });
  const userProfile = getNode('.user--profile-menu');
  const userProfileContents = getNode('.user--profile-contents');
  const userProfileSubContents = getNode('.user--contents');
  insertFirst(userProfile, await profileMenuTemplate(userInfoResult));
  insertFirst(
    getNode('.user--profile-temperture'),
    userTemperatureTemplate(userInfoResult.user_temperature)
  );
  insertFirst(userProfileContents, profileContentsTemplate(userBadgeResult));
  insertFirst(
    userProfileSubContents,
    profileSubContentsTemplate(userInfoResult.user_nickname)
  );
  const logoutButton = getNode('.user--logout');
  function handleLogout() {
    localStorage.removeItem('session');
    localStorage.removeItem('auth');
    relocateHREF("/index.html");
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
      addClass(userProfileBadgeButton,'is-active');
      addClass(userProfileBadgeList, 'is-active');
      insertAfter(userProfileBadgeList, badgeListTemplate)
      badge_view.forEach((item) => {
        console.log(item);
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
      removeClass(userProfileBadgeButton,'is-active');
      removeClass(userProfileBadgeList,'is-active');
      getNode('.user--profile-badge-detail').style = 'display:none';
    }
  }

  /**
   * 거래후기 더보기 토글 버튼 클릭시 발생하는 함수
   */
  const userProfileMannerButton = getNode('.user--profile-manner-button');
  const userProfileMannerList = getNode('.user--profile-manner');
  async function showManner() {
    if (!Array.from(userProfileMannerButton.classList).includes('is-active')) {
      // pocektbase 데이터 리스트 불러오기
      const manner_view = (
        await pb.collection('user_manner_join_view').getList(1, 50, {
          filter: `user_id= "${user_id}" `,
        })
      ).items;
      insertAfter(userProfileMannerList, mannerListTemplate);
      addClass(userProfileMannerButton, 'is-active');
      addClass(getNode('.user--profile-manner'), 'is-active');
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
      removeClass(userProfileMannerButton,'is-active');
      removeClass(userProfileMannerList,'is-active');
      getNode('.user--profile-manner-wrapper').style = 'display:none';
    }
  }

  userProfileBadgeButton.addEventListener('click', showBadge);
  userProfileMannerButton.addEventListener('click', showManner);
})();
