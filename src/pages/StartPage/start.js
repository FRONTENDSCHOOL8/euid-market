import gsap from 'gsap';
import { getNode } from '/src/lib/';

// GSAP 애니메이션 인스턴스 생성
const signUpAnimation = gsap.to('.go-sign-up', {
  scale: 1.05,
  duration: 0.2,
  paused: true,
  ease: 'power1.inOut',
});

getNode('.go-sign-up').addEventListener('mouseenter', () => {
  signUpAnimation.play();
});

getNode('.go-sign-up').addEventListener('mouseleave', () => {
  signUpAnimation.reverse();
});
