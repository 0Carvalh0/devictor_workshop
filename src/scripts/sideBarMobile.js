const sideBarMenu = document.getElementById("sideBar");
const btnSideBar = document.getElementById("sideBar-btnHamburguer");

// Abrir SideBar com botão

btnSideBar.addEventListener("click", () => {
  if (sideBarMenu.classList.contains("activeHamburguer")) {
    sideBarMenu.style.top = "0px";
    btnSideBar.classList.replace("fa-bars", "fa-xmark");
    sideBarMenu.classList.remove("activeHamburguer")
  } else {
    sideBarMenu.style.top = "-2000px";
    btnSideBar.classList.replace("fa-xmark", "fa-bars");
    sideBarMenu.classList.add("activeHamburguer")
  }
});
