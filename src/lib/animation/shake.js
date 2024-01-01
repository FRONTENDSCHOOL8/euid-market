
/* global gsap */

export const shake = gsap.to('#nameField, #submit',{
  duration:0.1,
  x:-10,
  repeat:5,
  yoyo:true,
  // immediateRender:true,
  clearProps:'x',
  paused:true
})