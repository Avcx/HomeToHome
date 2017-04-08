const menuOpenButton = document.querySelector('.open-nav');
const menuCloseButton = document.querySelector('.close-nav');
const sideBar = document.querySelector('#menu');

menuOpenButton.onclick = toggleNav;
menuCloseButton.onclick = toggleNav;
function toggleNav() {
    sideBar.classList.toggle('open');
}