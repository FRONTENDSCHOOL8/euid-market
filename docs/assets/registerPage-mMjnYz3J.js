import"./tiger-gZF_wzjS.js";function o(t){let e=t.value.replace(/\D/g,""),n="";e.length>3?(n+=e.substr(0,3)+" ",e.length>=7?n+=e.substr(3,4)+" "+e.substr(7):n+=e.substr(3)):n=e,t.value=n.trim()}function s(){if(!document.getElementById("verify-button").hasAttribute("aria-disabled")){const e=document.querySelector(".login--code-section"),n=document.getElementById("start-button"),i=document.querySelector(".login--nocode");e.classList.remove("hidden"),n.classList.remove("hidden"),i.classList.remove("hidden"),document.querySelector(".login--signup-email").classList.add("hidden")}}function d(){const t=document.getElementById("phone"),e=document.getElementById("verify-button");t.addEventListener("keyup",()=>{o(t),t.value.match(/^\d{3} \d{4} \d{4}$/)?(e.removeAttribute("disabled"),e.classList.add("active")):(e.setAttribute("disabled","true"),e.classList.remove("active"))})}document.addEventListener("DOMContentLoaded",()=>{d();const t=document.getElementById("verify-button");t&&t.addEventListener("click",s)});
