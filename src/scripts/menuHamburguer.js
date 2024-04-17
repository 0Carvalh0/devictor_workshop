const sideBarMenu = document.querySelector(".sideBar");
const sideBarButton = document.querySelector("#sideBar-MenuHamburguer");
const buttonsSection = document.querySelectorAll(".sideBar__ButtonSection");

sideBarButton.addEventListener("click", () => {
  if (sideBarMenu.classList.contains("sideBarActive")) {
    sideBarMenu.style.top = "-2000px";
    sideBarButton.style.color = "var(--color05)";
    sideBarButton.classList.replace("fa-xmark", "fa-bars");
    sideBarMenu.classList.remove("sideBarActive");
  } else {
    sideBarMenu.style.top = "0px";
    sideBarButton.style.color = "var(--colorwhite)";
    sideBarButton.classList.replace("fa-bars", "fa-xmark");
    sideBarMenu.classList.add("sideBarActive");
  }
});

buttonsSection.forEach((button) => {
  button.addEventListener("click", () => {
    sideBarButton.click();
  });
});
