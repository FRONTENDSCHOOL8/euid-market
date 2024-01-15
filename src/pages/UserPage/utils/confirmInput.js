export function confirmInput(field) {
  if (typeof field == 'string') {
    return field === '' ? '미입력' : field;
  } else if (typeof field === 'number') {
    return field === 0 ? '미입력' : field;
  } else {
    console.warn('confirmInput 함수엔 string, number type 만을 상대한다 . ');
  }
}
