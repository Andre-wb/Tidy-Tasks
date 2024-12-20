document.addEventListener('DOMContentLoaded', () => {
    const headerMenuButton = document.querySelector('.header-menu');
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    const topLine = document.getElementById('top_line');
    const centerLine = document.getElementById('center_line');
    const bottomLine = document.getElementById('bottom_line');
    const icon = document.getElementById('login-icon');

    if (headerMenuButton && nav) {
        headerMenuButton.addEventListener('click', () => {
            nav.classList.toggle('active');
            topLine.classList.toggle('active');
            centerLine.classList.toggle('active');
            bottomLine.classList.toggle('active');
            main.classList.toggle('active');
        });
    }

    icon.parentElement.addEventListener('mouseenter', () => {
        icon.setAttribute('state', 'intro');
        setTimeout(() => icon.play(), 0);
    });
});
