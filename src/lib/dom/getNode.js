export function getNode(node, context = document) {
  if (typeof node !== "string") {
    throw new Error("getNode 함수의 인수는 문자 타입 이어야 합니다.");
  }

  if(context.nodeType !== document.DOCUMENT_NODE){
    context = document.querySelector(context);
  }

  return context.querySelector(node);
}

export function getNodes(node) {
  if (typeof node !== "string") {
    throw new Error("getNodes 함수의 인수는 문자 타입 이어야 합니다.");
  }

  return document.querySelectorAll(node);
}
