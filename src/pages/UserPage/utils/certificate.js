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
        if (!res.ok) {
            /*
            TODO: 원하는 상태가 반환이 되지 않았지만, 실행중에 발생한 에러라 어쩔 수 없는 상황에서는 예외를 던져 보세요!
             */
            throw new Error('not ok!')
        }
        return res.json();
      })
      .then((jsonizeResult) => {
        /*
        * TODO: 근성이 돋보이는 코드입니다.
        * 이렇게 Array.prototype.reduce 를 사용하는 코드로 변환하는것도 도전해 보시길 추천합니다.
        * 함수형 프로그래밍과 좀 더 친해질 수 있을지도 모릅니다.
        * let 을 사용한 코드는 반드시 원본 객체를 수정하게 되므로 예상하지 못하는 부작용(부수효과)을 일으킵니다.
        * Array.prototype.reduce 를 사용하면 외부변수를 참조하지 않게 됩니다.
        * */
        return jsonizeResult.data.reduce((categorizedObj, item) => {
          const { 종목명 } = item;
           const initialLetter = 종목명.charAt(0);
          const consonant = findConsonant(initialLetter);
          if (!categorizedObj[consonant]) {
            categorizedObj[consonant] = [종목명];
          } else {
            if (!categorizedObj[consonant].includes(종목명)) {
              categorizedObj[consonant].push(종목명);
            }
          }
          return categorizedObj;
        }, {});
      });
}
