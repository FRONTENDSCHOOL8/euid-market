

function topBar(titleText="", option) {
  const blank = /* html */ `
    <div class="board--page-controller">
      <a href="/">
        <img src="/src/assets/icons/board/direction.svg" alt="뒤로가기" />
      </a>
    </div>
  `;

  const withTitle = /* html */ `
    <div class="board--page-controller">
      <a href="/">
        <img src="/src/assets/icons/board/direction.svg" alt="뒤로가기" />
      </a>
      <h3 class="label-s">${titleText}</h3>
    </div>
  `;
  const withShare = /* html */ `
    <div class="board--page-controller">
      <a href="/">
        <img src="/src/assets/icons/board/direction.svg" alt="뒤로가기" />
      </a>
      <div>
        <a href="/">
          <img src="/src/assets/icons/board/share.svg" alt="뒤로가기" />
        </a>
        <a href="/">
          <img src="/src/assets/icons/board/more.svg" alt="뒤로가기" />
        </a>
      </div>
    </div>
  `;
  const withHome = /* html */ `
    <div class="board--page-controller">
      <div>
        <a href="/">
          <img src="/src/assets/icons/board/direction.svg" alt="뒤로가기" />
        </a>
        <a href="/">
          <img src="/src/assets/icons/board/home.svg" alt="뒤로가기" />
        </a>
      </div>

      <div>
        <a href="/">
          <img src="/src/assets/icons/board/share.svg" alt="뒤로가기" />
        </a>
        <a href="/">
          <img src="/src/assets/icons/board/more.svg" alt="뒤로가기" />
        </a>
      </div>

    </div>
  
  `;

  // switch 대신 객체를 사용한 방법

  if(option === "blank") {
    return blank;
  } else if(option === "withTitle") {
    return withTitle;
  } else if(option === "withShare") {
    return withShare;
  } else if(option === "withHome") {
    return withHome;
  }
}


export function boardContent() {
  const template = /* html */
  `
    
  ${topBar("같이해요", "withHome")}


    <div>
      <img src="" alt="" />
      <h2>같이해요</h2>
    </div>


    <div class="board--content-container">
      
    </div>
  `;
  return template;

}

