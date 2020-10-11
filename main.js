const body = document.body;
const textBox = document.querySelector('.text-box');
const h1 = document.getElementsByTagName('h1')[0];
const h2 = document.getElementsByTagName('h2')[0];
const h3 = document.getElementsByTagName('h3')[0];
const a = document.getElementsByTagName('a')[0];
const p = document.getElementsByTagName('p')[0];

function switchTheme() {
  textBox.classList.toggle('dark-mode');
  body.classList.toggle('dark-mode');
  h1.classList.toggle('dark-mode');
  h2.classList.toggle('dark-mode');
  h3.classList.toggle('dark-mode');
  a.classList.toggle('dark-mode');
  p.classList.toggle('dark-mode');
}

// system ui
if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  switchTheme('dark-mode');
}
