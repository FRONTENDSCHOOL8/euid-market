import { getNodes, removeClass, getNode } from '/src/lib/';

const loading = getNode('.loading');
const loadingBar = getNode('.loading-bar > div');
const percentage = getNode('.loading-percentage');

export function loadingComplete(arr) {
  const temp = [];
  if (arr.length === 1) {
    temp.push(getNodes(arr[0]));
  } else {
    arr.forEach((className) => {
      temp.push(getNodes(className));
    });
  }

  imageLoadingChecker(temp);
}

function imageLoadingChecker(arr) {
  let count = 0;

  const checkLength = (() => {
    let length = 0;
    arr.forEach((item) => {
      length += item.length;
    });
    return length;
  })();

  console.log(`We have to load ${checkLength} images`);

  for (const item of arr) {
    item.forEach((list) => {
      list.onload = () => {
        count++;
        const percent = Math.floor((count / checkLength) * 100);
        percentage.innerText = `${percent}%`;
        loadingBar.style.width = `${percent}%`;
        console.log(`this is ${count} image`);
        if (count === checkLength) {
          console.log('load complete!!');
          setTimeout(() => {
            removeClass(loading, 'active');
          }, 500);
        }
      };
    });
  }
}
