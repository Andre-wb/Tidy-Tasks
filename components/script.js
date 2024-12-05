document.addEventListener('DOMContentLoaded', () => {
    const headerMenuButton = document.querySelector('.header-menu');
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    const topLine = document.getElementById('top_line');
    const centerLine = document.getElementById('center_line');
    const bottomLine = document.getElementById('bottom_line');

    if (headerMenuButton && nav) {
        headerMenuButton.addEventListener('click', () => {
            nav.classList.toggle('active');
            topLine.classList.toggle('active');
            centerLine.classList.toggle('active');
            bottomLine.classList.toggle('active');
            main.classList.toggle('active');
        });
    }
    const loginButton = document.querySelector('.login');
    const lordIcon = document.querySelector('#login-icon');

// Добавляем слушатель событий на кнопку
    loginButton.addEventListener('mouseenter', () => {
        lordIcon.setAttribute('state', 'hover'); // Включаем анимацию
    });

    loginButton.addEventListener('mouseleave', () => {
        lordIcon.setAttribute('state', 'intro'); // Возвращаем в исходное состояние
    });

});
