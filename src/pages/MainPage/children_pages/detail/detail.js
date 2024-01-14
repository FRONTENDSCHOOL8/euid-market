import { getNode, insertLast, insertBefore } from '/src/lib/';
import {
  productDetailTemplate,
  userInfoTemplate,
} from '/src/pages/MainPage/util/';
import { renderTopBar } from '/src/components/general/index.js';
import pb from '/src/lib/api/pocketbase.js';
import gsap from 'gsap';
const tl = gsap.timeline();

const container = getNode('.app');
insertBefore(container, renderTopBar('withHome'));
const hash = window.location.hash.slice(1);
const app = getNode('.app');

pb.collection('product_list')
  .getOne(hash)
  .then((product) => {
    insertLast(app, productDetailTemplate(product));
    pb.collection('users')
      .getOne(product.seller)
      .then((resolve) => {
        insertLast('.user-info', userInfoTemplate(resolve));
      });

    tl.from('body', {
      opacity: 0,
      x: '100%',
      ease: 'power2.inOut',
    });
  });
