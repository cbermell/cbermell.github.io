document.addEventListener('DOMContentLoaded', function () {
    // Inicializar AOS
    AOS.init({
        duration: 1000, // Duración de la animación en milisegundos
        once: true, // Solo animar una vez
    });

    // Agregar evento scroll para controlar animaciones específicas
    window.addEventListener('scroll', function () {
        // Obtener la posición de la parte superior de la ventana
        var scrollTop = window.scrollY;

        // Obtener la altura de la ventana del navegador
        var windowHeight = window.innerHeight;

        // Obtener todas los elementos con el atributo [data-aos]
        var elements = document.querySelectorAll('[data-aos]');

        // Iterar sobre cada elemento y activar la animación si está en la ventana visible
        elements.forEach(function (element) {
            // Calcular la posición del elemento en relación con la parte superior de la ventana
            var elementOffsetTop = element.getBoundingClientRect().top + scrollTop;

            // Calcular la posición de activación de la animación
            var triggerPosition = elementOffsetTop - windowHeight + 50; // Puedes ajustar el 50 según sea necesario

            // Verificar si el elemento está en la ventana visible y activar la animación
            if (scrollTop > triggerPosition) {
                element.classList.add('aos-animate');
            }
        });
    });
});
