import"./tiger-5hZ-PmLe.js";/* empty css              */import"./main-Abp3wEEg.js";import{p as l}from"./pocketbase-zYAbJ1uT.js";import{h as p}from"./template-YiXSuqHX.js";import{g as t,d as n}from"./insert-xagiYKFv.js";import"./renderNavBar-c6batOFe.js";(async()=>{const o="c24hzewie4gweri",s=(await l.collection("user_privacy").getList(1,10,{filter:`user_id = "${o}" `})).items[0],a=t(".profile--modify-profile-keyword");n(a,p(s));const e=t(".profile--gender-is-public");function c(i){i.target.dataset.is_public,Array.from(e.children).forEach(r=>{r.dataset.is_public="false",r.classList.remove("is-active")}),i.target.classList.add("is-active")}e.addEventListener("click",c)})();