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
