import { insertFirst } from '/src/lib/index';
import { getData, getUserData, getUserProfilePicture } from "../index.js";



export async function renderMainPosts(container) {

  const items = await getData();
  items.forEach((item) => {
    let template;
    if(item.category === "같이해요") {
      template = /* html */ 
      `
      <div class="board--post-instance">
        <label class=" label-s board--badge">${item.category}</label> 
        <h2>${item.title}</h2>
        <div class="board--flex">
          <img src="/src/assets/icons/general/fullpeople.svg" alt="" >
          <p>${item.requirements}</p>
        </div>
        
        <div class="board--flex">
          <img src="/src/assets/icons/general/calendar.svg" alt="" >
          <p>${item.time}</p>
        </div>
      </div>
      `
    } else if(item.category === "질의응답") {
      template = /* html */
      `
      <div class="board--post-instance">
        <label class="label-s board--badge">${item.stack}</label> 
        <h2>${item.title.length > 20 ? item.content.slice(1, 20) + "..." : item.title}</h2>
        <p class="paragraph-s board--qna-content">${item.content.length > 30 ? item.content.slice(1, 30) + "..." : item.content}</p>

        <section class="board--flex">
          <p class="paragraph-s">${item.location}</p>
          <p class="paragraph-s">• 몇일 전</p>
          <p class="paragraph-s">• 조회 123</p>
        </section>
      </div>
      `  
    } else {
      template = /* html */ 
      `
      <div class="board--post-instance">
        <label class=" label-s board--badge">${item.category}</label> 
        <h2>${item.title}</h2>
        <div class="board--flex">
          <img src="/src/assets/icons/general/fullpeople.svg" alt="" >
          <p>${item.requirements}</p>
        </div>
        
        <div class="board--flex">
          <img src="/src/assets/icons/general/calendar.svg" alt="" >
          <p>${item.time}</p>
        </div>
      </div>
      `
    }

    insertFirst(container, template);
  })
}

export async function renderTogetherPosts(container) {
  const items = await getData();
  // const check = await getUserData(items[15].created_by);
  // const imageSrc = await getUserProfilePicture(check);
  items.forEach((item) => {
      let userID;
      getUserData(item.created_by).then((data) => {
        userID = data
        console.log(userID);
        getUserProfilePicture(userID).then((imageURL) => {
          const template = /* html */ 
          `
            <div class="board--together-content" data-id=${item.id}>
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
                <figcaption class="paragraph-s">${item.requirements} 참여가능</figcaption>
              </figure>
              <figure>
                <img src="/src/assets/icons/general/calendar.svg" alt="" />
                <figcaption class="paragraph-s">${item.time}</figcaption>
              </figure>
      
              <div>
                <figure>
                  <img class="board--together-profile-picture" src=${imageURL} alt="" />
                  <figcaption class="paragraph-s">${item.curr_people}/${item.max_people}명</figcaption>
                </figure>
      
                <p class="paragraph-s">35분 전</p>
              </div>
            </div>
          `
          insertFirst(container, template)
        })
      });
  })
}