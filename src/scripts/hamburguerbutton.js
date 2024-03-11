const btn__Menu = document.getElementById("btn__menu");
const navbar = document.getElementById("navbar");

btn__Menu.addEventListener("click", () => {
  if (navbar.style.top < "0px") {
    navbar.style.top = "0px";
  } else {
    navbar.style.top = "-300px";
  }
});
