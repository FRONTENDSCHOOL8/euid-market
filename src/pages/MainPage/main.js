import data from '/src/pages/MainPage/data/data.json';
import { insertLast } from '/src/lib/';
import gsap from 'gsap';

function onLoad() {
  data.forEach((item) => {
    const template = /* html */ `
    <li class="story">
      <a href="/">
              <figure>
                <img src=${item.img} alt="" />
              </figure>
              <figcaption>
                <div class="story-title">
                  ${item.title}
                </div>
                <div>${item.category} | ${item.name}</div>
              </figcaption>
              </a>
            </li>
  `;

    insertLast('.Main-story-board', template);
  });
}

onLoad();

gsap.from('.story', {
  opacity: 0,
  y: 0,
  stagger: 0.05,
});
