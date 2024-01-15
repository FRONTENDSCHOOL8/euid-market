import './profileCard.css';
import pb from '/src/lib/api/pocketbase';
import {
  profileCardUserInfoTemplate,
  profileCardBasicInfosTemplate,
} from '/src/pages/UserPage/template';

import { renderNavBar } from '/src/components/general/index.js';

import { getNode, insertFirst, sessionHandler } from '/src/lib/';

/* -------------------------------------------------------------------------- */
/*                                     개발용                                    */
/* -------------------------------------------------------------------------- */
const { id: user_id } = JSON.parse(localStorage.getItem('auth'))['user'];

// 최상단 프로필카드
(async () => {
  sessionHandler();
  renderNavBar();
  const userInfoResult = (
    await pb
      .collection('users')
      .getList(1, 10, { filter: `id = "${user_id}" ` })
  ).items[0];
  const profileUserInfos = getNode('.profile--user-info');
  const profileUserBasicInfos = getNode('.profile--card-basic-infos');
  insertFirst(profileUserInfos, profileCardUserInfoTemplate(userInfoResult));
  insertFirst(
    profileUserBasicInfos,
    profileCardBasicInfosTemplate(userInfoResult)
  );
})();
