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
