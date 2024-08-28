const body = document.body;
const toggleThemeButton = document.querySelector(".theme-toggle__rail");
const indicator__icon = document.querySelector(".indicator__icon");

toggleThemeButton.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  toggleThemeButton.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    document.querySelector(
      "img[src = './assets/images/icons/GitHub.png']"
    ).style.filter = "invert(1)";
    document.querySelector(".header__title").src =
      "./assets/images/Devictor_LogoPreta.png";

    indicator__icon.classList.replace("fa-moon", "fa-sun");
  } else {
    document.querySelector(
      "img[src = './assets/images/icons/GitHub.png']"
    ).style.filter = "invert(0)";
    document.querySelector(".header__title").src =
      "./assets/images/Devictor_LogoBranca.png";

    indicator__icon.classList.replace("fa-sun", "fa-moon");
  }
});

// PHONE MASK

const inputPhone = document.querySelector("#inputPhone");

inputPhone.addEventListener("input", () => {
  let value = inputPhone.value.replace(/\D/g, "");

  if (value.length <= 11) {
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
  }

  inputPhone.value = value;
});

