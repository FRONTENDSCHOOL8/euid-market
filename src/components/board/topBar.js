export function topBar(titleText="", option) {
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