import './profileCard.css';
import pb from '/src/lib/api/pocketbase';
import {
  profileCardUserInfoTemplate,
  profileCardBasicInfosTemplate,
} from '/src/pages/UserPage/template';

import { renderNavBar } from "/src/components/general/index.js";

import { getNode, insertFirst, sessionHandler } from '/src/lib/';

/* -------------------------------------------------------------------------- */
/*                                     개발용                                    */
/* -------------------------------------------------------------------------- */
const TEST_USER_ID = 'c2zrq8ifbpivaop';

// 최상단 프로필카드
(async () => {
  sessionHandler();
  renderNavBar();
  const userInfoResult = (
    await pb
      .collection('users')
      .getList(1, 10, { filter: `id = "${TEST_USER_ID}" ` })
  ).items[0];
  const profileUserInfos = getNode('.profile--user-info');

  insertFirst(profileUserInfos, profileCardUserInfoTemplate(userInfoResult));

  const profileUserBasicInfos = getNode('.profile--card-basic-infos');

  insertFirst(
    profileUserBasicInfos,
    profileCardBasicInfosTemplate(userInfoResult)
  );
})();
