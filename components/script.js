document.addEventListener('DOMContentLoaded', () => {
    const headerMenuButton = document.querySelector('.header-menu');
    const nav = document.querySelector('nav');
    const topLine = document.getElementById('top_line');
    const centerLine = document.getElementById('center_line');
    const bottomLine = document.getElementById('bottom_line');

    if (headerMenuButton && nav) {
        headerMenuButton.addEventListener('click', () => {
            nav.classList.toggle('active');
            topLine.classList.toggle('active');
            centerLine.classList.toggle('active'); // Прячем среднюю линию
            bottomLine.classList.toggle('active');
        });
    }
});
