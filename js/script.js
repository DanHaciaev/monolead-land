// Основной объект для работы с языками
const LanguageHandler = {
    // Получаем язык из URL
    getLanguageFromUrl() {
        const hash = window.location.hash.substring(1);
        return hash === 'ua' || hash === 'en' ? hash : 'en';
    },

    setLanguage(lang) {
        window.location.hash = lang;
        document.getElementById('current-language').textContent = lang.toUpperCase();
        
        const elements = document.getElementsByClassName('lang');
        Array.from(elements).forEach(element => {
            const key = element.getAttribute('key');
            if (key && arrLang[lang] && arrLang[lang][key]) {
                element.textContent = arrLang[lang][key];
            }
        });

        this.updateLanguageVisibility(lang);
    },

    updateLanguageVisibility(currentLang) {
        const allLang = document.querySelectorAll('.hidden-lang');
        allLang.forEach(lang => {
            if (lang.querySelector('.translate').textContent === currentLang.toUpperCase()) {
                lang.style.display = 'none';
            } else {
                lang.style.display = 'block';
            }
        });
    },

    init() {
        const currentLang = this.getLanguageFromUrl();
        this.setLanguage(currentLang);

        // Обработчик изменения хэша в URL
        window.addEventListener('hashchange', () => {
            const newLang = this.getLanguageFromUrl();
            this.setLanguage(newLang);
        });

        const languageSelector = document.getElementById('language-selector');
        languageSelector.addEventListener('click', (event) => {
            event.stopPropagation();
            languageSelector.classList.toggle('open');
            
            const currentLanguages = document.getElementById('current-language');
            const allLang = document.querySelectorAll('.hidden-lang');
            
            allLang.forEach(lang => {
                if (lang.querySelector('.translate').textContent === currentLanguages.textContent) {
                    lang.style.display = 'none';
                } else {
                    lang.style.display = 'block';
                }
            });
        });

        document.addEventListener('click', () => {
            const languageSelector = document.getElementById('language-selector');
            languageSelector.classList.remove('open');
        });

        document.querySelectorAll('.translate').forEach(button => {
            button.addEventListener('click', (event) => {
                event.stopPropagation();
                
                const lang = button.getAttribute('id');
                this.setLanguage(lang);
                
                const currentLanguages = document.getElementById('current-language');
                const languageSelector = document.getElementById('language-selector');
                
                currentLanguages.textContent = button.textContent;
                languageSelector.classList.remove('open');
                
                const allLang = document.querySelectorAll('.hidden-lang');
                allLang.forEach(lang => {
                    if (lang.querySelector('.translate').textContent === currentLanguages.textContent) {
                        lang.style.display = 'none';
                    } else {
                        lang.style.display = 'block';
                    }
                });
            });
        });
    }
};

// Инициализация после загрузки DOM
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
    const modal = document.getElementById('language-modal');
    modal.style.display = 'flex';  // Показываем модальное окно
}

// Закрытие модального окна
const closeModalButton = document.getElementById('close-modal');
if (closeModalButton) {
    closeModalButton.addEventListener('click', function() {
        const modal = document.getElementById('language-modal');
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

