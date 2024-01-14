// submit 버튼 너비 조정 함수
const buttonWidth = () => {
  // 부모 요소 선택
  const parent = getNode('.login--container');
  // 부모 요소의 너비 계산
  const parentWidth = parent.offsetWidth;
  // 버튼 요소 선택
  const button = getNode('.login--step-next-container');
  // 버튼의 너비를 부모 요소의 너비로 설정
  button.style.width = `${parentWidth}px`;
};

// 창 크기가 변경될 때마다 버튼 너비 조정
window.addEventListener('resize', buttonWidth);

// 초기 로드 시 버튼 너비 조정
buttonWidth();
