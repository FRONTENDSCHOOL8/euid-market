function h(a="blank",c="같이해요"){const s="/src/assets/icons/general/direction.svg",r="/src/assets/icons/general/share.svg",e="/src/assets/icons/general/more.svg",i="/src/assets/icons/general/more.svg",t=`
    <div class="page-controller">
      <a href="javascript:history.back()">
        <img src=${s} alt="뒤로가기" />
      </a>
    </div>
  `,l=`
    <div class="page-controller">
      <a href="javascript:history.back()">
        <img src=${s} alt="뒤로가기" />
      </a>
      <h3 class="label-s">${c}</h3>
    </div>
  `,o=`
    <div class="page-controller">
      <a href="javascript:history.back()">
        <img src=${s} alt="뒤로가기" />
      </a>
      <div>
        <a href="/">
          <img src=${r} alt="공유하기" />
        </a>
        <a href="/">
          <img src=${e} alt="더 보기" />
        </a>
      </div>
    </div>
  `,n=`
    <div class="page-controller">
      <div>
        <a href="javascript:history.back()">
          <img src=${s} alt="뒤로가기" />
        </a>
        <a href="javascript:history.back()">
          <img src=${i} alt="홈페이지" />
        </a>
      </div>

      <div>
        <a href="javascript:history.back()">
          <img src=${r} alt="공유하기" />
        </a>
        <a href="javascript:history.back()">
          <img src=${e} alt="더 보기" />
        </a>
      </div>

    </div>
  
  `;if(a==="blank")return t;if(a==="withTitle")return l;if(a==="withShare")return o;if(a==="withHome")return n}export{h as r};
