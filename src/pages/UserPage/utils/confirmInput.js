/*
TODO: 함수에서 3항연산자를 사용하고 있다는 것은, 이 함수가 1개 이상의 일을 하고 있다는 강력한 신호입니다.
 confirmNumber 와 confirmText 로 분리해 보시는 것은 어떨까요?
 */
export function confirmInput(field) {
  // early return 으로 머리를 비워 보세요.
  if (typeof field == 'string') {
    return field === '' ? '미입력' : field;
  }

  if (typeof field === 'number') {
    return field === 0 ? '미입력' : field;
  }

  throw new Error('confirmInput 함수엔 string, number type 만을 상대한다 . ');
}
