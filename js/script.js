const LanguageHandler = {
    // Устанавливаем язык на основе текущего контента на странице
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
            // Прячем текущий выбранный язык
            if (lang.querySelector('.translate').textContent === currentLang.toUpperCase()) {
                lang.style.display = 'none';
            } else {
                lang.style.display = 'block';
            }
        });
    },

    // Инициализация обработчиков
    init() {
        // Получаем текущий язык из URL (например, из имени файла)
        const currentLang = window.location.pathname.split('/').pop().split('.')[0].toUpperCase();
        this.setLanguage(currentLang || 'EN'); // Если язык не указан, по умолчанию ставим 'EN'

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

                // Смена языка и переход на соответствующую страницу
                const lang = button.querySelector('a').getAttribute('href').split('.')[0].toUpperCase();
                this.setLanguage(lang);
            });
        });
    }
};

// Инициализация обработчиков при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    LanguageHandler.init();
});



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

// Проверяем размер при загрузке страницы
document.addEventListener('DOMContentLoaded', checkWindowSize);

// Проверяем размер при изменении размера окна
window.addEventListener('resize', checkWindowSize);

