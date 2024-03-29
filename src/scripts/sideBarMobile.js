const btnSideBar = document.getElementById("sideBar-btnHamburguer"),
  sideBarMenu = document.getElementById("sideBar");

// Abrir SideBar com botão

btnSideBar.addEventListener("click", () => {
  if (sideBarMenu.style.top <= "-2000px") {
    sideBarMenu.style.top = "0px";
    btnSideBar.classList.replace("fa-bars", "fa-xmark");
  } else {
    sideBarMenu.style.top = "-2000px";
    btnSideBar.classList.replace("fa-xmark", "fa-bars");
  }
});
