document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Cambiar entre modo claro y oscuro al hacer clic en el botón de alternar tema
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        const icon = darkModeToggle.querySelector('i');

        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
});
