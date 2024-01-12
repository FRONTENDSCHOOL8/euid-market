import './profileModify.css';
import pb from '/src/lib/api/pocketbase';
import {
  profilePublicButtonTemplate,
  profileSaveTemplate,
  profileModifySubmitErrorTemplate,
  profileExposureDetailTermsTemplate,
} from '/src/pages/UserPage/template';
import { handleDivDisplayNone } from '/src/pages/UserPage/utils/displayNone.js';

import { getNode, insertAfter, insertFirst, insertLast } from '/src/lib/';
//배포전 수정 !!!!!!!!!!!!!!!1
const TEST_USER_ID = 'c2zrq8ifbpivaop';

//바로 랜더링
(async () => {
  const profileKeyword = getNode('.profile--modify-profile-keyword');
  // 버튼 기본 렌더링 !
  const userPrivacyResult = (
    await pb
      .collection('user_privacy')
      .getList(1, 10, { filter: `user_id = "${TEST_USER_ID}" ` })
  ).items[0];

  const userInfoResult = await pb.collection('users').getOne(TEST_USER_ID);

  let {
    id: privacyRecordID,
    gender_is_public,
    age_is_public,
  } = userPrivacyResult;

  let { id: usersRecordID } = userInfoResult;

  insertAfter(
    profileKeyword,
    profilePublicButtonTemplate(gender_is_public, age_is_public)
  );
  return { privacyRecordID, usersRecordID };
})().then((obj) => {
  console.log(obj);
  const { privacyRecordID, usersRecordID } = obj;
  const ageIsPublic = getNode('.profile--age-is-public');
  const profileTerms = getNode('.profile--terms-lists');
  const allAgreeCheckbox = getNode('#profile--all-agree');
  const privacyCheckbox = getNode('#profile--privacy-agree');
  const exposureCheckbox = getNode('#profile--exposure-agree');
  const genderIsPublic = getNode('.profile--gender-is-public');
  const responsibilityCheckbox = getNode('#profile--responsibility-agree');
  const submitButton = getNode('.profile--submit-save-button');
  const profileExposureTermsDetail = getNode('.profile--term-profileTerms');
  let tempData = { userPrivacyUpdataedData: {}, usersUpdatedData: {} };
  /**
   * 성별.나이 공개 토글 버튼 클릭했을때 발생하는 이벤트 함수
   * @param {*} e
   */
  function handlePublicToggle(e) {
    //성별/ 나이 중 뭘 선택했는지
    const type = e.currentTarget.dataset.type;
    tempData['userPrivacyUpdataedData'][`${type}_is_public`] =
      e.target.dataset.is_public;
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
  }

  /**
   * 약관 전체 동의를 클릭했을때 발생하는 이벤트함수
   * @param {*} e
   */
  function handleAllCheck() {
    const isChecked = allAgreeCheckbox.checked;
    privacyCheckbox.checked = isChecked;
    exposureCheckbox.checked = isChecked;
    responsibilityCheckbox.checked = isChecked;
    if (isChecked) {
      submitButton.classList.add('is-active');
    } else {
      submitButton.classList.remove('is-active');
    }
  }

  /**
   * 약관 동의를 클릭했을때 발생하는 이벤트 함수
   * @param {*} e
   */
  function handleTermsCheck(e) {
    let input = e.target.closest('input');
    if (!input) return;
    if (
      privacyCheckbox.checked &&
      exposureCheckbox.checked &&
      responsibilityCheckbox.checked
    ) {
      allAgreeCheckbox.checked = true;
      submitButton.classList.add('is-active');
      getNode('.profile--submit-error-message').remove();
    } else {
      allAgreeCheckbox.checked = false;
      submitButton.classList.remove('is-active');
    }
  }

  /**
   * 프로필 정보 노출영역 확인 탹관 클릭시 발생하는 이벤트
   * @param {*} e
   */
  function renderTerms(e) {
    if (!getNode('.profile--exposure-terms-detail')) {
      insertLast(
        e.target.closest('label'),
        profileExposureDetailTermsTemplate()
      );
      profileExposureTermsDetail.innerText = '숨기기';
    } else {
      getNode('.profile--exposure-terms-detail').style = 'display:none';
      profileExposureTermsDetail.innerText = '자세히';
    }
  }

  /**
   * 저장하기 버튼 클릭시 발생하는 이벤트함수
   * @param {*} e
   */
  async function handleSubmit(e) {
    if (
      Array.from(e.target.classList).includes('profile--submit-save-button') &&
      allAgreeCheckbox.checked
    ) {
      insertFirst('body', profileSaveTemplate());
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      getNode('.profile--modify-save-alert').style = `top:${
        scrollTop + window.innerHeight / 2
      }px`;
      let { userPrivacyUpdataedData, usersUpdatedData } = tempData;
      console.log(userPrivacyUpdataedData);

      await pb
        .collection('user_privacy')
        .update(`${privacyRecordID}`, userPrivacyUpdataedData);

      await pb.collection('users').update(`${usersRecordID}`, usersUpdatedData);

      getNode('.profile--modify-confirm').addEventListener(
        'click',
        handleDivDisplayNone
      );
      return;
    }
    if (!getNode('.profile--submit-error-message')) {
      insertAfter(
        getNode('.profile--terms-lists'),
        profileModifySubmitErrorTemplate()
      );
    }
  }

  submitButton.addEventListener('click', handleSubmit);
  allAgreeCheckbox.addEventListener('change', handleAllCheck);
  profileTerms.addEventListener('click', handleTermsCheck);
  genderIsPublic.addEventListener('click', handlePublicToggle);
  ageIsPublic.addEventListener('click', handlePublicToggle);
  profileExposureTermsDetail.addEventListener('click', renderTerms);
  // 자격증
});
