import {
  getNode,
  insertLast,
  insertBefore,
  sessionHandler,
  loadingComplete,
} from '/src/lib/';

import {
  productDetailTemplate,
  userInfoTemplate,
} from '/src/pages/MainPage/util/';

// 상단 네비게이션바 랜더링
import { renderTopBar } from '/src/components/general/index.js';

import pb from '/src/lib/api/pocketbase.js';

// local storage에 사용자가 등록이 안되어있다면 초기 페이지로 이동
sessionHandler();

const container = getNode('.app');
const hash = window.location.hash.slice(1);
const app = getNode('.app');

pb.collection('product_list')
  .getOne(hash)
  .then((product) => {
    // id값이 일치하는 제품 확인
    insertLast(app, productDetailTemplate(product));
    pb.collection('users')
      .getOne(product.seller)
      .then((resolve) => {
        // 해당 글을 게시한 사용자 확인
        insertLast('.user-info', userInfoTemplate(resolve));
        loadingComplete(['.user-profile']);
        insertBefore(container, renderTopBar('withHome'));
      });
  });
