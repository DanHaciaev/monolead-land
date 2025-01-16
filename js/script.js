// Открытие/закрытие меню выбора языка
document.getElementById('language-selector').addEventListener('click', function(event) {
    event.stopPropagation(); // Предотвращаем всплытие события
    this.classList.toggle('open'); // Переключаем класс для открытия/закрытия меню
    
    const currentLanguages = document.getElementById('current-language');
    const allLang = document.querySelectorAll('.hidden-lang');
    
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
    const languageSelector = document.getElementById('language-selector');
    if (!languageSelector.contains(event.target)) {
        languageSelector.classList.remove('open'); // Закрытие меню, если клик вне
    }
});

// Обработчик для кнопок выбора языка
document.querySelectorAll('.translate').forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation(); // Останавливаем всплытие события
        
        const currentLanguages = document.getElementById('current-language');
        const languageSelector = document.getElementById('language-selector');
        
        // Обновляем текст текущего языка
        currentLanguages.textContent = this.textContent; // Обновляем текст в #current-language
        
        // Закрытие меню выбора языка
        languageSelector.classList.remove('open');
        
        // Обновляем видимость языков
        const allLang = document.querySelectorAll('.hidden-lang');
        allLang.forEach(lang => {
            if (lang.querySelector('.translate').textContent === currentLanguages.textContent) {
                lang.style.display = 'none'; // Скрыть текущий выбранный язык
            } else {
                lang.style.display = 'block'; // Показать другие языки
            }
        });
    });
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

