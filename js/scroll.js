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