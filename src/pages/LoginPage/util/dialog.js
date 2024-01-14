import { getNode } from '/src/lib/';

export function showDialog(randomCode) {
  const codeText = getNode('#code-text');
  codeText.textContent = randomCode;
  const dialog = getNode('#code-dialog');
  dialog.showModal();
}
