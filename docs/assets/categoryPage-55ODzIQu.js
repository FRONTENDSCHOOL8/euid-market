import{t as n,i as r}from"./tiger-uvPuI86Z.js";async function g(){(await n.get("http://127.0.0.1:8090/api/collections/interest_category/records")).data.items.forEach(e=>{const o=`
    <li type="hidden" class="login--category-card" role="button" tabindex="0">
    <div class="login--category-name">
      <p class="login--category-main paragraph-s">${e.main_category}</p>
      <p class="login--category-sub heading-s">${e.sub_category}</p>
    </div>
    <img src="/src/assets/icons/login/plus.svg" alt="관심분야에 추가" />
  </li>
    `;r(".login--category-list",o)}),l()}let t=[];function l(){document.querySelectorAll(".login--category-card").forEach(a=>{a.addEventListener("click",function(){const s=this.querySelector(".login--category-main").textContent,e=this.querySelector(".login--category-sub").textContent,o={mainCategory:s,subCategory:e};this.classList.toggle("active-card"),this.classList.contains("active-card")?t.push(o):t=t.filter(c=>c.mainCategory!==s||c.subCategory!==e),console.log(t);const i=this.querySelector("img");i.src=this.classList.contains("active-card")?"/src/assets/icons/login/check.svg":"/src/assets/icons/login/plus.svg"})})}g();document.querySelector(".login--category-submit").addEventListener("click",function(){localStorage.setItem("selectedCategories",JSON.stringify(t)),console.log("저장된 데이터:",localStorage.getItem("selectedCategories"))});document.querySelector(".login--category-submit").addEventListener("click",function(){window.location.href="/src/pages/LoginPage/signup/"});
