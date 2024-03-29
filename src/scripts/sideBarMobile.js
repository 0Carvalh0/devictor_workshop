const btnSideBar = document.getElementById("sideBar-btnHamburguer"),
  sideBarMenu = document.getElementById("sideBar");

// Abrir SideBar com botão

btnSideBar.addEventListener("click", () => {
  if (sideBarMenu.style.top === "-1080px") {
    sideBarMenu.style.top = "0px";
    btnSideBar.classList.replace("fa-bars", "fa-xmark");
  } else {
    sideBarMenu.style.top = "-1080px";
    btnSideBar.classList.replace("fa-xmark", "fa-bars");
  }
});
