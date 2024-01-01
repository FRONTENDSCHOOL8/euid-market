/* global attr */


/* -------------------------------------------- */
/*                   class 함수                   */
/* -------------------------------------------- */

import { getNode } from "./getNode.js";

export function addClass(node,className){
  
  if(typeof node === 'string') node = getNode(node);
  if(typeof className !== 'string'){
    throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.')
  }

  node.classList.add(className);
}

export function removeClass(node,className){
  
  if(typeof node === 'string') node = getNode(node);
  if(!className){
    node.className = '';
    // attr()
    return;
  }
  if(typeof className !== 'string'){
    throw new TypeError('removeClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.')
  }
  node.classList.remove(className);
}

export function toggleClass(node,className){
  
  if(typeof node === 'string') node = getNode(node);
  if(typeof className !== 'string'){
    throw new TypeError('toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.')
  }

  return node.classList.toggle(className);
}










/* -------------------------------------------- */
/*                   style 함수                   */
/* -------------------------------------------- */


function getCss(node,prop){

  if(typeof node === 'string') node = getNode(node);
  if(!(prop in document.body.style)){
    throw new SyntaxError('getCss 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.')
  }
  return getComputedStyle(node).getPropertyValue(prop)
}

function setCss(node,prop,value){
  
  if(typeof node === 'string') node = getNode(node);
  if(!(prop in document.body.style)){
    throw new SyntaxError('setCss 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.')
  }
  if(!value) throw new SyntaxError('setCss 함수의 세 번째 인수는 필수값입니다.')
  node.style[prop] = value;
}

export const css = (node,prop,value)=> !value ? getCss(node,prop) : setCss(node,prop,value);



