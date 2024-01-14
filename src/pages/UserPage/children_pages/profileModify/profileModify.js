import './profileModify.css';
import pb from '/src/lib/api/pocketbase';
import {
  profilePublicButtonTemplate,
  profileSaveTemplate,
  profileModifySubmitErrorTemplate,
  profileExposureDetailTermsTemplate,
  profileCertificationSelectTemplate,
  profileCertificationTemplate,
  profileConsonantTemplate,
  profileConfirmSecessionTemplate,
  profileJobPopupTemplate,
  profileJobSelfAddTemplate,
  profileJobElementTemplate,
} from '/src/pages/UserPage/template';
import {
  getCertifications,
  handleDivDisplayNone,
} from '/src/pages/UserPage/utils/index.js';

import {
  getNode,
  getNodes,
  insertAfter,
  insertFirst,
  insertLast,
} from '/src/lib/';

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
  let jobLists;
  let consonantList;
  let certifications;
  let tempJobData;
  let certificationList;
  let tempCertificationData = [];
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
  const modifyCertificationButton = getNode('.profile--modify-certification');
  const userSecession = getNode('.profile--user-secession');
  const usersJobAdd = getNode('.profile--users-job-add');
  let tempData = { userPrivacyUpdataedData: {}, usersUpdatedData: {} };

  /**
   * 본인이 하는 일을 추가해보세요 버튼을 클릭시 발생하는 함수
   */

  async function handleJobModify() {
    if (!getNode('.profile--select-jobs-form')) {
      insertFirst('body', profileJobPopupTemplate());
      const resultList = (await pb.collection('jobs').getList(1, 50))['items'];
      jobLists = getNode('.profile--select-jobs-lists');
      resultList.forEach((item) => {
        let { job_title } = item;
        insertFirst(jobLists, profileJobElementTemplate(job_title));
      });
      jobLists.addEventListener('click', handleJob);
    }
    getNode('.profile--select-jobs-close').addEventListener(
      'click',
      handleJobForm
    );
    getNode('.profile--select-jobs-add-button').addEventListener(
      'click',
      handleShowAddForm
    );
    getNode('.profile--select-jobs-save').addEventListener(
      'click',
      handleJobSave
    );
  }
  /**
   * 하는 일 추가하기 팝업창의 직업 버튼을 클릭시 발생하는 함수
   * @param {*} e
   */
  function handleJob(e) {
    console.log(e.target);
    Array.from(jobLists.children).forEach((item) => {
      item.classList.remove('is-active');
    });
    e.target.classList.add('is-active');
    tempJobData = e.target.dataset.userJob;
    getNode('.profile--select-jobs-save').classList.add('is-active');
  }
  /**
   * 하는일 추가하기 팝업창을 닫는 함수
   */
  function handleJobForm() {
    getNode('.profile--select-jobs-form').remove();
  }

  /**
   * db에 해당하는 직업이 없을때 직접 추가
   */
  function handleShowAddForm() {
    insertAfter(
      getNode('.profile--select-jobs-form-title'),
      profileJobSelfAddTemplate()
    );
    getNode('.profile--select-jobs-add-button').remove();
    let job_title;
    function handleJobInput(e) {
      job_title = e.target.value;
      getNode('.profile--jobs-reaction').innerText =
        '정말 멋진 직업을 갖고 계시는 군요 ! ';
    }
    function handleJobInputSave(e) {
      e.preventDefault();
      getNode('.profile--jobs-reaction').remove();
      getNode('.profile--select-jobs-add-form').remove();
      insertFirst(jobLists, profileJobElementTemplate(job_title));
    }
    getNode('.profile--jobs-input').addEventListener('input', handleJobInput);
    getNode('.profile--jobs-input-save').addEventListener(
      'click',
      handleJobInputSave
    );
  }
  /**
   * 하는일 추가하기 팝업의 저장하기 버튼을 클릭했을때 발생하는 이벤트 함수
   * @param {*} e
   */
  function handleJobSave(e) {
    console.log(tempJobData);

    if (!tempJobData == '') {
      e.target.innerText = '저장완료!';
      e.target.classList.add('is-active');
      tempData['usersUpdatedData']['user_job'] = tempJobData;
      console.log(tempData['usersUpdatedData']);
      setTimeout(() => {
        handleJobForm();
      }, 2000);
    } else {
      e.target.classList.remove('is-active');
      e.target.innerText = '직업을 선택해주세요!';
    }
  }

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
   * 자격증 간편 등록 버튼 클릭시 자격증 API 호출 + 보여주는 함수
   */
  async function handleCertificationModify() {
    if (!getNode('.profile--modify-select-form')) {
      insertFirst('body', profileCertificationSelectTemplate());
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      getNode('.profile--modify-select-form').style = `top:${
        scrollTop + window.innerHeight / 3.5
      }px`;
      try {
        const close = getNode('.profile--certification-close');
        const save = getNode('.profile--modify-certification-save');
        consonantList = getNode('.profile--modify-certification-consonants');
        certificationList = getNode('.profile--modify-certification-list');

        certifications = await getCertifications();

        Object.keys(certifications).forEach((item) => {
          insertLast(consonantList, profileConsonantTemplate(item));
          certifications[item].forEach((item) => {
            insertLast(certificationList, profileCertificationTemplate(item));
          });
        });
        save.addEventListener('click', handleCertificationSave);
        consonantList.addEventListener('click', handleConsonant);
        close.addEventListener('click', handleCertificationForm);
        certificationList.addEventListener('click', handleCertfication);
      } catch (error) {
        console.error('자격증을 불러오는 도중 오류 발생');
      }
    }
  }

  /**
   * 자격증 팝업창의 저장완료 버튼 클릭시 발생하는 이벤트 함수
   * @param {*} e
   */
  function handleCertificationSave(e) {
    console.log(e.target);
    e.target.innerText = '저장완료!';
    e.target.classList.add('is-active');

    tempData['usersUpdatedData']['user_certification'] =
      tempCertificationData.join(', ');
    setTimeout(handleCertificationForm, 2000);
  }

  /**
   * 자격증 팝업창 닫기
   */
  function handleCertificationForm() {
    getNode('.profile--modify-select-form').remove();
    tempCertificationData = [];
  }

  /**
   * 자격증 팝업 내 자음 버튼 클릭시 발생하는 이벤트 함수
   * @param {*} e
   * @returns
   */
  function handleConsonant(e) {
    const consonant = e.target.closest('li');
    if (!consonant) return;
    getNodes('.profile--consonant-element').forEach((item) => {
      item.classList.remove('is-active');
    });
    if (!Array.from(e.target.classList).includes('is-active')) {
      e.target.classList.add('is-active');
      getNodes('.profile--certification-element').forEach((item) => {
        item.remove();
      });
      certifications[consonant.dataset.certiciationConsonant].forEach(
        (item) => {
          insertLast(certificationList, profileCertificationTemplate(item));
        }
      );
    }
  }

  /**
   *자격증 종목 하나하나를 클릭했을때 발생하는 이벤트함수
   * @param {*} e
   * @returns
   */
  function handleCertfication(e) {
    let certification = e.target.closest('li');
    if (!certification) return;
    let certificationName = certification.dataset.certificationName;
    if (tempCertificationData.includes(certificationName)) {
      tempCertificationData.splice(
        tempCertificationData.indexOf(certificationName),
        1
      );
    }
    if (
      getNode(`#${certificationName}`).checked &&
      !tempCertificationData.includes(certificationName)
    ) {
      tempCertificationData.push(certificationName);
    }
    const selectedLists = getNode('.profile--modify-selected-certifiaction');
    selectedLists.innerText = tempCertificationData;
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
   * 프로필 정보 노출영역 확인 약관 자세히 클릭시 발생하는 이벤트
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
      getNode('.profile--exposure-terms-detail').remove();
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
      allAgreeCheckbox.checked &&
      !getNode('.profile--modify-save-alert')
    ) {
      insertFirst('body', profileSaveTemplate());
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      getNode('.profile--modify-save-alert').style = `top:${
        scrollTop + window.innerHeight / 2
      }px`;
      let { userPrivacyUpdataedData, usersUpdatedData } = tempData;

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

  /**
   * 탈퇴하기 버튼을 클릭했을때 발생하는 이벤트 함수
   * @param {*} e
   */
  function handleSeccession() {
    if (!getNode('.profile--secession-select-form')) {
      insertFirst('body', profileConfirmSecessionTemplate());
      const choiceList = getNode('.proifle--seccession-choice');
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      getNode('.profile--secession-select-form').style = `top:${
        scrollTop + window.innerHeight / 3
      }px`;
      choiceList.addEventListener('click', handleSeccessionButton);
    }
    /**
     * 탈퇴하기 팝업창에서의 탈퇴하기 버튼 클릭시 발생하는 함수
     * @param {*} e
     * @returns
     */
    async function handleSeccessionButton(e) {
      const buttonList = Array.from(e.target.classList);
      if (buttonList.includes('profile--user-cancel')) {
        getNode('.profile--secession-select-form').remove();
        return;
      }
      if (buttonList.includes('profile--user--seccession')) {
        // await pb.collection('users').delete(`${usersRecordID}`);
        getNode('.profile--user--seccession').innerText = '탈퇴완료! ';
        setTimeout(() => {
          window.location.href = 'src/pages/StartPage/index.html';
        }, 2000);
      }
    }
  }

  usersJobAdd.addEventListener('click', handleJobModify);
  userSecession.addEventListener('click', handleSeccession);
  submitButton.addEventListener('click', handleSubmit);
  allAgreeCheckbox.addEventListener('change', handleAllCheck);
  profileTerms.addEventListener('click', handleTermsCheck);
  genderIsPublic.addEventListener('click', handlePublicToggle);
  ageIsPublic.addEventListener('click', handlePublicToggle);
  profileExposureTermsDetail.addEventListener('click', renderTerms);
  modifyCertificationButton.addEventListener(
    'click',
    handleCertificationModify
  );
});
