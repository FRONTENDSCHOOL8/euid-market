function getDiffSeconds(productTime, currTime) {
  const productSeconds = Number(productTime.slice(17, 19));
  const currSeconds = Number(currTime.slice(17, 19));

  const productMinutes = Number(productTime.slice(14, 16));
  const currMinutes = Number(currTime.slice(14, 16));

  const productHours = Number(productTime.slice(11, 13));
  const currHours = Number(currTime.slice(11, 13));

  const productDay = Number(productTime.slice(8, 10));
  const currDay = Number(currTime.slice(8, 10));

  const productMonth = Number(productTime.slice(5, 7));
  const currMonth = Number(currTime.slice(5, 7));

  const productYear = Number(productTime.slice(0, 4));
  const currYear = Number(currTime.slice(0, 4));

  const product =
    productSeconds +
    productMinutes * 60 +
    productHours * 60 * 60 +
    productDay * 60 * 60 * 24 +
    productMonth * 60 * 60 * 24 * 30 +
    productYear * 60 * 60 * 24 * 30 * 12;

  const curr =
    currSeconds +
    currMinutes * 60 +
    currHours * 60 * 60 +
    currDay * 60 * 60 * 24 +
    currMonth * 60 * 60 * 24 * 30 +
    currYear * 60 * 60 * 24 * 30 * 12;

  return Math.abs(product - curr);
}

export function getUploadTime(time) {
  const curr = new Date().toISOString();

  const diffSeconds = getDiffSeconds(time, curr);

  if (diffSeconds < 60) {
    return '1분전';
  } else if (diffSeconds < 3600) {
    return `${Math.floor(diffSeconds / 60)}분전`;
  } else if (diffSeconds < 3600 * 24) {
    return `${Math.floor(diffSeconds / 3600)}시간전`;
  } else if (diffSeconds < 3600 * 24 * 30) {
    return `${Math.floor(diffSeconds / 3600 / 24)}일전`;
  } else if (diffSeconds < 3600 * 24 * 30 * 12) {
    return `${Math.floor(diffSeconds / 3600 / 24 / 30)}개월전`;
  } else {
    return '오래전';
  }
}
