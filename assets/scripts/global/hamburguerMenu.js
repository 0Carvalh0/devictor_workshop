const buttonHamburguer = document.querySelector("#header__ButtonHamburguer");
const buttonHamburguerClose = document.querySelector("#header__ButtonHamburguerClose")
const navList = document.querySelector("#header__Nav");

buttonHamburguer.addEventListener("click", () => {
  if (!buttonHamburguer.classList.contains("active") || !buttonHamburguerClose.classList.contains("active")) {
    navList.style.top = "0px";
  } else {
    navList.style.top = "-500px";
  }
  buttonHamburguer.classList.toggle("active");
});
