document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector(".header__theme-toggle");
    const body = document.body;

    // Funcionalidade de alternância de tema
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("page--light-theme");
        updateThemeIcon();
        localStorage.setItem(
            "theme",
            body.classList.contains("page--light-theme") ? "light" : "dark"
        );
    });

    // Verificar preferência de tema salva
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        body.classList.add("page--light-theme");
        updateThemeIcon();
    }

    function updateThemeIcon() {
        const sunIcon = themeToggle.querySelector(".fa-sun");
        const moonIcon = themeToggle.querySelector(".fa-moon");
        if (body.classList.contains("page--light-theme")) {
            sunIcon.style.display = "inline-block";
            moonIcon.style.display = "none";

            document.querySelector(".header__logo").src =
                "./assets/images/logos/Devictor_LogoPreta.png";
        } else {
            sunIcon.style.display = "none";
            moonIcon.style.display = "inline-block";

            document.querySelector(".header__logo").src =
                "./assets/images/logos/Devictor_LogoBranca.png";
        }
    }

    // Efeito de digitação na seção hero
    let options = {
        strings: [
            "Desenvolvedor Front-end",
            "Especialista em UI/UX",
            "Entusiasta de JavaScript",
        ],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1500,
        loop: true,
    };

    let typed = new Typed("#typing-text", options);

    // Modal de agradecimento
    const form = document.querySelector("#contact-form");
    const showModal = sessionStorage.getItem("showThankYouModal");
    const closeButton = document.querySelector(".thank-youModal__button");
    const modal = document.querySelector(".thank-youModal");

    form.addEventListener("submit", () => {
        sessionStorage.setItem("showThankYouModal", "true");
    });

    if (showModal === "true") {
        modal.showModal();
        sessionStorage.removeItem("showThankYouModal");
    }

    closeButton.addEventListener("click", () => {
        modal.close();
    });
});
