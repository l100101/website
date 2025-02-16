function togglePanel(panelId) {
    const button = document.querySelector(`[onclick="togglePanel('${panelId}')"]`);
    const panel = document.getElementById(panelId);

    // Получаем позицию кнопки
    const buttonRect = button.getBoundingClientRect();

    // Позиционируем панель рядом с кнопкой
    panel.style.top = `${buttonRect.top + window.scrollY}px`; // Вертикальное положение
    panel.style.left = `${buttonRect.left + buttonRect.width}px`; // Горизонтальное положение

    // Показать или скрыть панель
    document.querySelectorAll('.panel').forEach(p => {
        if (p.id === panelId) {
            p.classList.toggle('active');
        } else {
            p.classList.remove('active');
        }
    });
}

// Закрытие панели при клике вне кнопки и панели
document.addEventListener('click', function(event) {
    // Если клик был не по кнопке или панели
    const isClickInsidePanel = event.target.closest('.panel');
    const isClickInsideButton = event.target.closest('.menu button');

    // Закрыть все панели, если клик был вне панели и кнопки
    if (!isClickInsidePanel && !isClickInsideButton) {
        document.querySelectorAll('.panel').forEach(panel => {
            panel.classList.remove('active');
        });
    }
});

// Открытие/закрытие меню на мобильных
document.getElementById('menuToggle').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active'); // Переключаем класс для отображения меню
});
