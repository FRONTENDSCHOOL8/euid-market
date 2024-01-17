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

import { pbGetOne, pbGetList } from '/src/pages/UserPage/utils/index.js';

let userProfile = getNode('.user--profile-menu');
let userProfileContents = getNode('.user--profile-contents');
let userProfileSubContents = getNode('.user--contents');
let userProfileMannerList;
let userProfileMannerButton;
let userProfileBadgeButton;
let userProfileBadgeList;

const { id: user_id } = JSON.parse(localStorage.getItem('auth'))['user'];

async function renderUserPage() {
  const userInfoResult = await pbGetOne('users', user_id);
  const userBadgeResult = await pbGetList('user_badge', 'user_id', user_id);

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

  const logoutButton = getNode('.user--logout'); // 뱃지 더 보기
  userProfileBadgeList = getNode('.user--profile-badge');
  userProfileBadgeButton = getNode('.user--profile-badge-button');
  userProfileMannerButton = getNode('.user--profile-manner-button');
  userProfileMannerList = getNode('.user--profile-manner');

  logoutButton.addEventListener('click', handleLogout);
  userProfileBadgeButton.addEventListener('click', showBadge);
  userProfileMannerButton.addEventListener('click', showManner);
}

function handleLogout() {
  localStorage.removeItem('session');
  localStorage.removeItem('auth');
  window.location.reload();
}

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
    userProfileBadgeButton.classList.remove('is-active');
    userProfileBadgeList.classList.remove('is-active');
    getNode('.user--profile-badge-detail').style = 'display:none';
  }
}
renderUserPage();
sessionHandler();
renderNavBar();
