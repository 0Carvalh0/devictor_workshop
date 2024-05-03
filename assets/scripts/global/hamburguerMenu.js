const buttonHamburguer = document.querySelector("#header__ButtonHamburguer");
const buttonHamburguerClose = document.querySelector(
  "#header__ButtonHamburguerClose"
);
const navList = document.querySelector("#header__Nav");
const buttonSectionLink = document.querySelectorAll(".header__ButtonSection");

buttonHamburguer.addEventListener("click", () => {
  buttonHamburguer.classList.toggle("active");
  toogleHamburguer();
});

buttonSectionLink.forEach((buttonSection) => {
  buttonSection.addEventListener("click", () => {
    buttonHamburguer.click();
  });
});

function toogleHamburguer() {
  if (!buttonHamburguer.classList.contains("active")) {
    navList.style.top = "0px";
  } else {
    navList.style.top = "-500px";
  }
}
