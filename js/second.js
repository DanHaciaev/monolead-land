// Открытие/закрытие меню выбора языка
document.getElementById('selector-modal').addEventListener('click', function(event) {
    event.stopPropagation(); // Предотвращаем всплытие события
    this.classList.toggle('open'); // Переключаем класс для открытия/закрытия меню
    
    const currentLanguages = document.getElementById('current-languages-modal');
    const allLang = document.querySelectorAll('.hidden-lang-modal');
    
    // Обновляем видимость языков
    allLang.forEach(lang => {
        if (lang.querySelector('.translate').textContent === currentLanguages.textContent) {
            lang.style.display = 'none'; // Скрыть текущий выбранный язык
        } else {
            lang.style.display = 'block'; // Показать другие языки
        }
    });
});

// Закрытие меню при клике вне
document.addEventListener('click', function(event) {
    const languageSelector = document.getElementById('selector-modal');
    if (!languageSelector.contains(event.target)) {
        languageSelector.classList.remove('open'); // Закрытие меню, если клик вне
    }
});

// Обработчик для кнопок выбора языка
document.querySelectorAll('.translate').forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation(); // Останавливаем всплытие события
        
        const currentLanguages = document.getElementById('current-languages-modal');
        const languageSelector = document.getElementById('selector-modal');
        
        // Обновляем текст текущего языка
        currentLanguages.textContent = this.textContent; // Обновляем текст в #current-language
        
        // Закрытие меню выбора языка
        languageSelector.classList.remove('open');
        
        // Обновляем видимость языков
        const allLang = document.querySelectorAll('.hidden-lang-modal');
        allLang.forEach(lang => {
            if (lang.querySelector('.translate').textContent === currentLanguages.textContent) {
                lang.style.display = 'none'; // Скрыть текущий выбранный язык
            } else {
                lang.style.display = 'block'; // Показать другие языки
            }
        });
    });
});
