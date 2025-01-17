window.onload = function() {
    // Убираем .html из URL если оно есть
    let currentPath = window.location.pathname;
    if (currentPath.endsWith('.html')) {
        let newPath = currentPath.slice(0, -5); // удаляем последние 5 символов (.html)
        history.replaceState({}, '', newPath);
    }
}

function showSection(sectionId, event) {
    event.preventDefault();
    // Обновляем URL без .html
    let currentPath = window.location.pathname;
    if (currentPath.endsWith('.html')) {
        let newPath = currentPath.slice(0, -5);
        history.replaceState({}, '', newPath);
    }
    
    // Скролл к секции
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}