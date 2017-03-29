const list = document.querySelector('.nav-container');
const button = document.querySelector('.menu-button');

function toggleNav() {
  console.log('toggleNav');
  list.classList.toggle("open")
}

button.onclick = toggleNav;
