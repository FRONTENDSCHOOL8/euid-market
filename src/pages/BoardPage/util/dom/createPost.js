import data from '../../temp_data/data.json';
import { insertLast, getNode } from '/src/lib/index';

export function createPost() {

  const postContainer = getNode(".board--post-list");

  data.forEach((item) => {
    const template = /* html */ `
      <div class="board--post-instance">
        <label class=" label-s board--badge">${item.badge}</label> 
        <h2>${item.title}</h2>
        <div class="board--flex">
          <img src="/src/assets/icons/general/fullpeople.svg" alt="" >
          <p>${item.req}</p>
        </div>
        
        <div class="board--flex">
          <img src="/src/assets/icons/general/calendar.svg" alt="" >
          <p>${item.time}</p>
        </div>
    `

    insertLast(postContainer, template);
  })
}