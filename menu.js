const menuOpenButton = document.querySelector('.open-nav');
const menuCloseButton = document.querySelector('.close-nav');
const content = document.querySelector('#info')
const sideBar = document.querySelector('#menu');
const header = document.querySelector("#main-header");

menuOpenButton.onclick = toggleNav;
menuCloseButton.onclick = toggleNav;

window.addEventListener('scroll', (event) => {
    const headerHeight = header.clientHeight;
    const scroll = window.scrollY;
    const contentHeight = sideBar.scrollHeight - headerHeight;

    if (scroll > contentHeight) {
        header.classList.remove('hide');
    } else if (scroll < contentHeight - (headerHeight * 2)) {
        header.classList.add('hide');
    }
}, {passive: true});

function toggleNav() {
    sideBar.classList.toggle('open');
}