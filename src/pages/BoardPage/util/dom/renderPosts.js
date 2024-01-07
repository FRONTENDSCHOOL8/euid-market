import data from '../../temp_data/data.json';
import { insertLast} from '/src/lib/index';


const response = await fetch(
  `http://127.0.0.1:8090/api/collections/posts_together/records`
);

response.data = await response.json();
const items = response.data.items;

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
  console.log(items[0].status)
  // console.log(items);
  items.forEach((item) => {


    const template = /* html */ 
    `
      <div class="board--together-content">
        <header>
          <section>
            <p style=${item.status === "모집중" ? "color:#5A85EE;" : "color:#919191;"} class="paragraph-s">${item.status}</p>
            <p class="paragraph-s">• ${item.type}</p>
            <p class="paragraph-s">• ${item.location}</p>
          </section>
          <h2 class="label-m">${item.title}</h2>
        </header>

        <figure>
          <img src="/src/assets/icons/general/fullpeople.svg" alt="" />
          <figcaption class="paragraph-s">${item.requirements}</figcaption>
        </figure>
        <figure>
          <img src="/src/assets/icons/general/calendar.svg" alt="" />
          <figcaption class="paragraph-s">${item.time}</figcaption>
        </figure>

        <div>
          <figure>
            <img class="board--together-profile-picture" src="" alt="" />
            <figcaption class="paragraph-s">${item.max_people}/${item.curr_people}명</figcaption>
          </figure>

          <p class="paragraph-s">35분 전</p>
        </div>
      </div>
    `
    insertLast(container, template)
  })
}