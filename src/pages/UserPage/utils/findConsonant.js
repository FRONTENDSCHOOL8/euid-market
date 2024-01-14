/**
 * 한글 단어의 초성을 반환하는 함수
 * @param {*} words
 * @returns
 */
export function findConsonant(words) {
  const initialConsonantIndex = Math.floor((words.charCodeAt(0) - 44032) / 588);
  const initialConsonant = String.fromCharCode(initialConsonantIndex + 4352);

  return initialConsonant;
}
