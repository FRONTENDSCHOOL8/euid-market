import { productDetailTemplate } from '/src/pages/MainPage/template.js';
import {
  getNode,
  attr,
  insertLast,
  insertFirst,
  getPbImageURL,
} from '/src/lib/';
import pb from '/src/lib/utils/pocketbase.js';
import { productPriceTemplate } from '/src/pages/MainPage/template.js';

const hash = window.location.hash.slice(1);
const productImg = getNode('.Main-visual > img');
const mainContent = getNode('.main-content');
const price = getNode('.function-bar > div > div');
const product = await pb.collection('product_list').getOne(hash);

attr(productImg, 'src', getPbImageURL(product));
insertLast(mainContent, productDetailTemplate(product));
insertFirst(price, productPriceTemplate(product));
