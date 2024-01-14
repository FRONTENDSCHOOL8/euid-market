import gsap from 'gsap';
import { getNode } from '/src/lib/';

// GSAP 애니메이션 인스턴스 생성
const signUpAnimation = gsap.to('.go-sign-up', {
  scale: 1.05,
  duration: 0.2,
  paused: true, // 애니메이션 자동 시작 비활성화
  ease: 'power1.inOut', // 부드러운 이징 효과
});

// 마우스가 요소 위에 있을 때 애니메이션 재생
getNode('.go-sign-up').addEventListener('mouseenter', () => {
  signUpAnimation.play();
});

// 마우스가 요소를 벗어날 때 애니메이션 반전
getNode('.go-sign-up').addEventListener('mouseleave', () => {
  signUpAnimation.reverse();
});
