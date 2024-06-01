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
});
