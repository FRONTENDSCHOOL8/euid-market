import { getNode, attr, insertLast, insertFirst, insertBefore } from '/src/lib/';
import { getPbImageURL } from '/src/lib/utils/getPbImage.js';
import {
  productDetailTemplate,
  productPriceTemplate,
  userInfoTemplate,
} from '/src/pages/MainPage/template.js';
import { renderTopBar } from '/src/components/general/index.js';
import pb from '/src/lib/api/pocketbase.js';

import gsap from 'gsap';
const tl = gsap.timeline();

const container = getNode(".app");
insertBefore(container, renderTopBar("withTitle", "Hello"));
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


