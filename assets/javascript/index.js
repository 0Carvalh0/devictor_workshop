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
  const typingText = document.getElementById("typing-text");
  const phrases = [
    "Desenvolvedor Front-end",
    "Especialista em UI/UX",
    "Entusiasta de JavaScript",
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typingText.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingText.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeEffect, 500);
    } else {
      setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
  }

  typeEffect();

  // Modal de agradecimento
  const form = document.querySelector("#contact-form");
  const showModal = sessionStorage.getItem("showThankYouModal");
  const closeButton = document.querySelector(".thank-youModal__button");

  form.addEventListener("submit", () => {
    sessionStorage.setItem("showThankYouModal", "true");
  });

  if (showModal === "true") {
    const modal = document.querySelector(".thank-youModal");
    modal.showModal();
    sessionStorage.removeItem("showThankYouModal");
  }

  closeButton.addEventListener("click", () => {
    const modal = document.querySelector(".thank-youModal");
    modal.close();
  });
});
