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

let fillAmount = 0; // От 0 (чёрный) до 255 (зелёный)

// window.addEventListener('wheel', (event) => {
//     if (event.deltaY > 0) {
//         fillAmount = Math.min(fillAmount + 10, 255); // Увеличиваем зелёный
//     } else {
//         fillAmount = Math.max(fillAmount - 10, 0); // Уменьшаем зелёный
//     }
//     document.getElementById('svg-image').querySelector('rect').setAttribute('fill', `rgb(0, ${fillAmount}, 0)`);
// });


// window.addEventListener('scroll', () => {
//     let scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
//     let greenValue = Math.floor(scrollPercent * 255);
//     document.getElementById('svg-image').style.fill = `rgb(0, ${greenValue}, 0)`;
// });


//for phones
// function togglePanel(panelId, event) {
//     document.querySelectorAll('.panel').forEach(panel => {
//         if (panel.id === panelId) {
//             panel.classList.toggle('active');

//             // Получаем кнопку, которая вызвала панель
//             const button = event.currentTarget;
//             const rect = button.getBoundingClientRect();
//             const panel = document.getElementById(panelId);

//             // Проверяем, мобильный ли экран
//             if (window.innerWidth <= 768) {
//                 panel.style.left = "50%";
//                 panel.style.top = `${rect.bottom + window.scrollY}px`;
//                 panel.style.transform = "translateX(-50%)";
//             } else {
//                 panel.style.left = `${rect.right + window.scrollX}px`;
//                 panel.style.top = `${rect.top + window.scrollY}px`;
//                 panel.style.transform = "translateY(-50%)";
//             }
//         } else {
//             panel.classList.remove('active');
//         }
//     });
// }



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
