
export function relocateHREF(link) {
  window.location.href = link;
}

export function relocateLink(link) {
  window.location = link;
}

export function changeLink(element, link="/src/pages/BoardPage/children_pages/createPost/") {
  element.href = link;
}