import { getNodes, removeClass, getNode } from '/src/lib/';

const loading = getNode('.loading');

export function loadingComplete(arr) {
  const temp = [];
  if (arr.length === 1) {
    temp.push(getNodes(arr[0]));
  }
  arr.forEach((className) => {
    temp.push(getNodes(className));
  });
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

  console.log(checkLength);

  for (const item of arr) {
    item.forEach((list) => {
      list.onload = () => {
        count++;

        if (count === checkLength) {
          removeClass(loading, 'active');
        }
      };
    });
  }
}
