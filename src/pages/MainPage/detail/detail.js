import { getNode, attr, insertLast, insertFirst, comma } from '/src/lib/';
import pb from '/src/lib/api/pocketbase.js';
import { getPbImageURL } from '/src/pages/MainPage/getPbImage';

const hash = window.location.hash.slice(1);
const productImg = getNode('.Main-visual > img');
const mainContent = getNode('.main-content');
const price = getNode('.function-bar > div > div');
const product = await pb.collection('product_list').getOne(hash);
attr(productImg, 'src', getPbImageURL(product));

const template = `
  <div>
    <h1 class="title">${product.title}</h1>
      <div>
        <span>${product.type}</span>
        <span>•</span>
        <span>17분전</span>
      </div>
  </div>
  <p>
  ${product.description}
  </p>
`;

insertLast(mainContent, template);

const template2 = `
<span class="price">${comma(product.price)}</span>
`;

insertFirst(price, template2);
