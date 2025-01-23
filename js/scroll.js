window.onload = function() {
    let currentPath = window.location.pathname;
    // Убираем .html и /index из URL если они есть
    if (currentPath.endsWith('.html') || currentPath.includes('/index')) {
        let newPath = currentPath
            .replace('.html', '')  // убираем .html
            .replace('/index', ''); // убираем /index
        history.replaceState({}, '', newPath);
    }
}

const LanguageHandler = {
    // Устанавливаем язык на основе выбранного языка
    setLanguage(lang) {
        // Обновляем текст текущего языка
        document.getElementById('current-language').textContent = lang.toUpperCase();

        // Обновляем видимость языков в селекторе
        this.updateLanguageVisibility(lang);
    },

    // Обновляем видимость языков в селекторе
    updateLanguageVisibility(currentLang) {
        const allLang = document.querySelectorAll('.hidden-lang');
        allLang.forEach(lang => {
            const langText = lang.querySelector('a').textContent.toUpperCase(); // Получаем текст языка
            if (langText === currentLang.toUpperCase()) {
                lang.style.display = 'none'; // Прячем текущий язык
            } else {
                lang.style.display = 'block'; // Показываем другие языки
            }
        });
    },

    // Инициализация обработчиков
    init() {
        // Normalize language code to uppercase
        const path = window.location.pathname.split('/');
        const detectedLang = path[path.length - 2].toUpperCase();
    
        // Mapping to ensure consistent language code
        const languageMap = {
            'EN': 'EN',
            'UA': 'UA'
            // Add more languages as needed
        };
    
        // Set language, defaulting to 'EN' if not found
        const normalizedLang = languageMap[detectedLang] || 'EN';
    
        // Redirect if the URL doesn't match the normalized language
        if (detectedLang !== normalizedLang) {
            const newPath = window.location.pathname.replace(
                `/${path[path.length - 2]}/`, 
                `/${normalizedLang}/`
            );
            window.location.replace(newPath);
        }
    
        // Set the language (removed the duplicate call)
        this.setLanguage(normalizedLang);

        // Обработчик открытия/закрытия селектора языка
        const languageSelector = document.getElementById('language-selector');
        languageSelector.addEventListener('click', (event) => {
            event.stopPropagation();
            languageSelector.classList.toggle('open');
        });

        // Закрытие селектора при клике вне его
        document.addEventListener('click', () => {
            const languageSelector = document.getElementById('language-selector');
            languageSelector.classList.remove('open');
        });

        // Обработчик кликов по кнопкам выбора языка
        document.querySelectorAll('.translate').forEach(button => {
            button.addEventListener('click', (event) => {
                event.stopPropagation();

                // Получаем язык, который был выбран (например, 'EN' или 'UA')
                const lang = button.querySelector('a').textContent.toUpperCase();

                // Смена языка
                this.setLanguage(lang);

                // Переход на соответствующую страницу
                window.location.href = button.querySelector('a').getAttribute('href');
            });
        });
    }
};

// Инициализация обработчиков при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    LanguageHandler.init();
});