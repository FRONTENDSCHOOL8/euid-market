import { getNode, attr, insertLast, insertFirst } from '/src/lib/';
import { getPbImageURL } from '/src/lib/utils/getPbImage.js';
import {
  productDetailTemplate,
  productPriceTemplate,
} from '/src/pages/MainPage/template.js';

import pb from '/src/lib/api/pocketbase.js';

import gsap from 'gsap';
const tl = gsap.timeline();

const hash = window.location.hash.slice(1);
const productImg = getNode('.Main-visual > img');
const mainContent = getNode('.main-content');
const price = getNode('.function-bar > div > div');

pb.collection('product_list')
  .getOne(hash)
  .then((product) => {
    attr(productImg, 'src', getPbImageURL(product));
    insertLast(mainContent, productDetailTemplate(product));
    insertFirst(price, productPriceTemplate(product));
    tl.from('body', {
      opacity: 0,
      x: '100%',
      ease: 'power2.inOut',
    });
  });
