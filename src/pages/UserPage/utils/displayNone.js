export function handleDivDisplayNone(e) {
  e.target.closest('div').style = 'display:none';
  window.location.href =
    '/src/pages/UserPage/children_pages/profileCard/index.html';
}
