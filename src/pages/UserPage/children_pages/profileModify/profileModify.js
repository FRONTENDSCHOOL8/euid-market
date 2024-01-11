import './profileModify.css';
import pb from '/src/lib/api/pocketbase';
import { profilePublicButtonTemplate } from '/src/pages/UserPage/template';

import { getNode, insertAfter } from '/src/lib/';
//배포전 수정 !!!!!!!!!!!!!!!1
const TEST_USER_ID = 'bexmuprbriobf8v';

//바로 랜더링
(async () => {
  const profileKeyword = getNode('.profile--modify-profile-keyword');
  // 버튼 기본 렌더링 !
  const userPrivacyResult = (
    await pb
      .collection('user_privacy')
      .getList(1, 10, { filter: `user_id = "${TEST_USER_ID}" ` })
  ).items[0];
  insertAfter(profileKeyword, profilePublicButtonTemplate(userPrivacyResult));
})().then(() => {
  let tempData = {};

  // 성별, 나이 버튼이벤트 바인딩 !
  const genderIsPublic = getNode('.profile--gender-is-public');
  const ageIsPublic = getNode('.profile--age-is-public');

  function handlePublicToggle(e) {
    //성별/ 나이 중 뭘 선택했는지
    const type = e.currentTarget.dataset.type;
    tempData[`${type}_is_public`] = e.target.dataset.is_public;
    if (type === 'gender') {
      Array.from(genderIsPublic.children).forEach((item) => {
        item.classList.remove('is-active');
      });
    } else if (type === 'age') {
      Array.from(ageIsPublic.children).forEach((item) => {
        item.classList.remove('is-active');
      });
    }
    e.target.classList.add('is-active');
    console.log(tempData);
  }

  genderIsPublic.addEventListener('click', handlePublicToggle);
  ageIsPublic.addEventListener('click', handlePublicToggle);

  // 약관 전체 동의

  //저장버튼 누르면 tempData의 수정하고자 하는 정보들이 Db로 적재
});
