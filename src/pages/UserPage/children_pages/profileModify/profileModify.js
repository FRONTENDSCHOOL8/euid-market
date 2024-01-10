import './profileModify.css';
import pb from '/src/lib/api/pocketbase';
import { profilePublicButtonTemplate } from '/src/pages/UserPage/template';

import { getNode, insertAfter } from '/src/lib/';

//배포전 수정 !!!!!!!!!!!!!!!1
const TEST_USER_ID = 'c24hzewie4gweri';

// 기본 렌더링 !
const userPrivacyResult = (
  await pb
    .collection('user_privacy')
    .getList(1, 10, { filter: `user_id = "${TEST_USER_ID}" ` })
).items[0];

const profileKeyword = getNode('.profile--modify-profile-keyword');

insertAfter(profileKeyword, profilePublicButtonTemplate(userPrivacyResult));

const tempData = {};

// 버튼이벤트
const genderIsPublic = getNode('.profile--gender-is-public');

function handleGenderToggle(e) {
  tempData['gender_is_public'] = Boolean(e.target.dataset.is_public);
  Array.from(genderIsPublic.children).forEach((item) => {
    item.dataset.is_public = 'false';
    item.classList.remove('is-active');
  });
  e.target.classList.add('is-active');
}

genderIsPublic.addEventListener('click', handleGenderToggle);
