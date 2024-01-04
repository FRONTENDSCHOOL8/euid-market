import data from '../../temp_data/data.json';
import togetherData from '../../temp_data/together.json';
import { insertLast, getNode } from '/src/lib/index';

export function renderMainPosts() {

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

export function renderTogetherPosts() {
  togetherData.forEach((item) => {
    return ( /* html */ 
    `
      <div class="board--together-content">
        <section>
          <p>${item.status}</p>
          <p>${item.type}</p>
          <p>${item.location}</p>
        </section>
        <h2>${item.title}</h2>
      </div>
    `
    

    )
  })
}