document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Modal functionality
    const projectBtns = document.querySelectorAll(".project-btn");
    const modals = document.querySelectorAll(".modal");
    const closeBtns = document.querySelectorAll(".close");

    projectBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const modalId = btn.getAttribute("data-modal");
            document.getElementById(modalId).style.display = "block";
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const modalId = btn.getAttribute("data-modal");
            document.getElementById(modalId).style.display = "none";
        });
    });

    window.addEventListener("click", (e) => {
        modals.forEach(modal => {
            if (e.target == modal) {
                modal.style.display = "none";
            }
        });
    });

    // Carousel functionality
    const prevBtn = document.querySelector(".carousel-btn.prev");
    const nextBtn = document.querySelector(".carousel-btn.next");
    const projectsGrid = document.querySelector(".projects-grid");

    let scrollAmount = 0;

    nextBtn.addEventListener("click", () => {
        projectsGrid.scrollBy({
            top: 0,
            left: 300,
            behavior: "smooth"
        });
        scrollAmount += 300;
        toggleArrows();
    });

    prevBtn.addEventListener("click", () => {
        projectsGrid.scrollBy({
            top: 0,
            left: -300,
            behavior: "smooth"
        });
        scrollAmount -= 300;
        toggleArrows();
    });

    const toggleArrows = () => {
        prevBtn.style.display = scrollAmount > 0 ? "block" : "none";
        nextBtn.style.display = projectsGrid.scrollWidth > (projectsGrid.clientWidth + scrollAmount) ? "block" : "none";
    };

    // Initialize arrows visibility
    toggleArrows();
});
