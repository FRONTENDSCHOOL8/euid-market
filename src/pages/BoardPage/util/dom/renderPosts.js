import data from '../../temp_data/data.json';
import togetherData from '../../temp_data/together.json';
import { insertLast} from '/src/lib/index';

export function renderMainPosts(container) {
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

    insertLast(container, template);
  })
}

export function renderTogetherPosts(container) {
  togetherData.forEach((item) => {


    const template = /* html */ 
    `
      <div class="board--together-content">
        <section>
          <p style=${item.status === "모집중" ? "color:#5A85EE;" : "color:#919191;"} class="paragraph-s">${item.status}</p>
          <p class="paragraph-s">• ${item.type}</p>
          <p class="paragraph-s">• ${item.location}</p>
        </section>
        <h2 class="label-m">${item.title}</h2>

        <figure>
          <img src="/src/assets/icons/general/fullpeople.svg" alt="" />
          <figcaption class="paragraph-s">${item.requirements}</figcaption>
        </figure>
        <figure>
          <img src="/src/assets/icons/general/calendar.svg" alt="" />
          <figcaption class="paragraph-s">${item.time}</figcaption>
        </figure>
      </div>
    `
    insertLast(container, template)
  })
}