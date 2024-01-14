import { findConsonant } from './index.js';

const API =
  'https://api.odcloud.kr/api/3073409/v1/uddi:67410a14-0403-417c-ab90-d49b32f62510?page=1&perPage=1000&serviceKey=5YycB3Hgt0u37VbApUT%2FnSO%2F3ZHdsRtsli31JBWe9%2BCncYRvTQ2ihUui4fWjdXkWElPFc7P%2BYTtJA0xfHId32w%3D%3D';
/**
 * 자격증 종목 불러오는 함수
 * @returns
 */
export function getCertifications() {
  return fetch(`${API}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((jsonizeResult) => {
      const categorizedObj = {};
      let certificationList = [];
      Array.from(jsonizeResult.data).forEach((item) => {
        let { 종목명 } = item;
        if (!certificationList.includes(종목명)) {
          certificationList.push(종목명);
        }
      });
      certificationList.sort();
      certificationList.forEach((certification) => {
        let initialLetter = certification.charAt(0);
        let consonant = findConsonant(initialLetter);
        if (!categorizedObj[consonant]) {
          categorizedObj[consonant] = [certification];
        } else {
          categorizedObj[`${consonant}`].push(certification);
        }
      });
      return categorizedObj;
    });
}
