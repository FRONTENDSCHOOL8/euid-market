import gsap from "gsap"
import { removeClass } from "./src/lib";

document.addEventListener("DOMContentLoaded", function() {
  removeClass(".start-page-logo", "hidden");
  gsap.from(".start-page-logo", {scale: 0, opacity: 0, duration: .5, ease: "poweri.out"});
})