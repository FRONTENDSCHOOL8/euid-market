import { relocateLink } from "/src/pages/BoardPage/util/index.js";


export function sessionHandler() {
  const {localStorage} = window;
  if(localStorage.getItem("session") === "logged_in") {
    return;
  } else {
    alert("로그인 해주세요")
    relocateLink("/src/pages/StartPage/")
  }
}