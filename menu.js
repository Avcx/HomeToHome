const list = document.querySelector('.nav-container');
const button = document.querySelector('.menu-button');
const header = document.getElementsByClassName('head-wrap')[0];
const arrow = document.getElementById('indicator');
const firstContainer = document.getElementById('first-container');
let lastScroll = 0;
let isNavOpen = false;

function toggleNav() {
  console.log('toggleNav');
  list.classList.toggle('open');
  if (isNavOpen) {
    isNavOpen = false;
    document.body.style.overflow = 'auto';
  } else {
    isNavOpen = true;
    document.body.style.overflow = 'hidden';
  }
}
window.onload = function() {
window.addEventListener('scroll', (event) => {
  let currentScroll = window.pageYOffset || document.scrollTop || 0;
  console.log(`currentScroll: ${currentScroll}`);
  console.log(`Last Scroll: ${lastScroll}`);
  if (currentScroll > lastScroll) {
    console.log('scrolled down');
    if (isNavOpen) {
      toggleNav();
    }
    header.style.transform = 'translateY(-600px)';
  } else {
    console.log('scrolled up');
    header.style.transform = 'translateY(0)';
  }
  lastScroll = currentScroll;
})
}

arrow.addEventListener('click', (event) => {
  firstContainer.scrollIntoView();
})

button.onclick = toggleNav;
