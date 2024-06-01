document.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = document.querySelectorAll('header nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#ff6347';
        });

        link.addEventListener('mouseout', () => {
            link.style.color = '#fff';
        });
    });
});
