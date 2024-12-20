document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const burgerNav = document.getElementById('burger-nav');
    const stylePanel = document.getElementById('style-panel');
    const authPanel = document.getElementById('auth-panel');
    const showStylePanelLink = document.getElementById('show-style-panel');
    const showAuthPanelLink = document.getElementById('show-auth-panel');
    const bgColorInput = document.getElementById('bg-color');
    const textColorInput = document.getElementById('text-color');
    const fontSizeInput = document.getElementById('font-size');
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, a, span');

    // Відкриття/закриття бургер-меню
    burgerMenu.addEventListener('click', () => {
        burgerNav.classList.toggle('active');
    });

    // Відкриття панелі стилів
    showStylePanelLink.addEventListener('click', (e) => {
        e.preventDefault();
        stylePanel.style.display = stylePanel.style.display === 'block' ? 'none' : 'block';
        authPanel.style.display = 'none'; // Закриття панелі авторизації
    });

    // Відкриття панелі авторизації
    showAuthPanelLink.addEventListener('click', (e) => {
        e.preventDefault();
        authPanel.style.display = authPanel.style.display === 'block' ? 'none' : 'block';
        stylePanel.style.display = 'none'; // Закриття панелі стилів
    });

    // Закриття панелей при кліку поза межами
    document.addEventListener('click', (e) => {
        if (!stylePanel.contains(e.target) && e.target !== showStylePanelLink) {
            stylePanel.style.display = 'none';
        }
        if (!authPanel.contains(e.target) && e.target !== showAuthPanelLink) {
            authPanel.style.display = 'none';
        }
    });

    // Зміна кольору фону
    bgColorInput.addEventListener('input', () => {
        document.body.style.backgroundColor = bgColorInput.value;
    });

    // Зміна кольору тексту
    textColorInput.addEventListener('input', () => {
        document.body.style.color = textColorInput.value;
    });

    // Зміна розміру шрифту (тільки для текстових елементів)
    fontSizeInput.addEventListener('input', () => {
        const fontSize = `${fontSizeInput.value}px`;
        textElements.forEach((el) => {
            el.style.fontSize = fontSize;
        });
    });

    // Валідація форми авторизації
    document.getElementById('auth-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!email.includes('@')) {
            alert('Введіть дійсну електронну адресу.');
        } else if (password.length < 6) {
            alert('Пароль має містити щонайменше 6 символів.');
        } else {
            alert('Авторизація успішна!');
        }
    });

});