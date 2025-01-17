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
        // Получаем текущий язык из URL (например, из имени файла)
        const path = window.location.pathname.split('/');
        const currentLang = path[path.length - 2]; // Это будет язык (например, 'EN' или 'UA')

        // Устанавливаем язык (по умолчанию 'EN' если не найден)
        this.setLanguage(currentLang || 'EN');

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

// Функция для открытия модального окна
function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';  // Показываем модальное окно
}

// Закрытие модального окна
const closeModalButton = document.getElementById('close-modal');
if (closeModalButton) {
    closeModalButton.addEventListener('click', function() {
        const modal = document.getElementById('modal');
        modal.style.display = 'none';  // Закрываем модальное окно
    });
}

// Обработчик клика на кнопку меню (открытие модального окна)
const mobileMenuButton = document.querySelector('.mobile-menu-button');
if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', function() {
        openModal();  // Вызываем функцию открытия модального окна
    });
}

// Функция для скрытия модального окна и скролла к секции
function showSection(sectionId, event) {
    event.preventDefault();  // Останавливаем переход по ссылке

    // Закрываем модальное окно
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'none';
    }

    // Скролл к секции
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Проверка размера окна
function checkWindowSize() {
    const windowWidth = window.innerWidth;
    const mobileButton = document.querySelector('.mobile-button');
    
    if (windowWidth <= 881) {
        // Показываем кнопку для мобильных
        if (mobileButton) {
            mobileButton.style.display = 'block';
        }
    } else {
        // Скрываем кнопку на больших экранах
        if (mobileButton) {
            mobileButton.style.display = 'none';
        }
    }
}

// Проверяем размер при загрузке страницы
document.addEventListener('DOMContentLoaded', checkWindowSize);

// Проверяем размер при изменении размера окна
window.addEventListener('resize', checkWindowSize);
