export function handleDivDisplayNone(e) {
  e.target.closest('div').style = 'display:none';
  history.back();
}
