import { findConsonant } from '/src/pages/UserPage/utils/findsConsonant.js';
const API =
  'https://api.odcloud.kr/api/3073409/v1/uddi:67410a14-0403-417c-ab90-d49b32f62510?page=1&perPage=1000&serviceKey=5YycB3Hgt0u37VbApUT%2FnSO%2F3ZHdsRtsli31JBWe9%2BCncYRvTQ2ihUui4fWjdXkWElPFc7P%2BYTtJA0xfHId32w%3D%3D';
fetch(`${API}`)
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
  .then((jsonizeResult) => {
    const obj = jsonizeResult;
    let certificationList = [];
    Array.from(obj.data).forEach((item) => {
      let { 종목명 } = item;
      if (!certificationList.includes(종목명)) {
        certificationList.push(종목명);
      }
    });
    certificationList.sort();

    const categorizedObj = {};

    certificationList.forEach((certification) => {
      let initialLetter = certification.charAt(0);
      let consonant = findConsonant(initialLetter);
      if (!categorizedObj[consonant]) {
        categorizedObj[consonant] = [certification];
      } else {
        categorizedObj[`${consonant}`].push(certification);
      }
    });

    Object.keys(categorizedObj).forEach((item) => {
      console.log(item);
      console.log(categorizedObj[item]);
    });
  });
