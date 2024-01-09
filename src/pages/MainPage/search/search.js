import { getNode } from '/src/lib/';
import gsap from 'gsap';

gsap.from('body', {
  opacity: 0,
  y: -10,
  ease: 'power2.inOut',
});

const back = getNode('.search-container > img');

back.addEventListener('click', () => {
  window.history.back();
});
