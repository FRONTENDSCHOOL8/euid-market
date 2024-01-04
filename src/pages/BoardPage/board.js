// import PocketBase from 'pocketbase';


import { getNode, insertLast } from "../../lib/index.js";

// const pb = new PocketBase('http://127.0.0.1:8090');



// const records = await pb.collection('users').getFullList({
//   sort: '-created',
// });

// const response = await fetch(
//   `http://127.0.0.1:8090/api/collections/products/records`
// );

// const hello = $('.hello');



// response.data = await response.json();
// const items = response.data.items;

// items.forEach((item) => {
//   const template =  /* html */ `
//     <p>${item.description}</p>
//   `;

//   insertLast(hello, template);


// })
// const descData = response.data.items[1].description;
// insertLast(hello, descData);

// console.log(response.data.items[0].description);



function createPost() {
  const template = /* html */ `
    <div class="board--post-instance">
      <label class=" label-s board--badge">같이해요</label> 
      <h2>youtube 클론 프젝 같이 하실분~!</h2>
      <div class="board--flex">
        <img src="/src/assets/icons/fullpeople.svg" alt="" >
        <p>누구나 참여 가능</p>
      </div>
      
      <div class="board--flex">
        <img src="/src/assets/icons/calendar.svg" alt="" >
        <p>내일, 오후 7:00</p>
      </div>
  `

  for(let i=0; i<10; i++) {
    insertLast(getNode('.board--post-list'), template);
  }
  
}

createPost();