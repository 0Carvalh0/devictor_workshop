function toggleTheme() {
  const body = document.body;
  body.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    document.querySelector(
      "img[src = './assets/images/icons/GitHub.png']"
    ).style.filter = "invert(1)";
  } else {
    document.querySelector(
      "img[src = './assets/images/icons/GitHub.png']"
    ).style.filter = "invert(0)";
  }

}

// PHONE MASK

const inputPhone = document.querySelector("#inputPhone");

inputPhone.addEventListener("keypress", () => {
  let inputPhoneLength = inputPhone.value.length;

  if (inputPhoneLength === 0) {
    inputPhone.value += "(";
  } else if (inputPhoneLength === 3) {
    inputPhone.value += ") ";
  } else if (inputPhoneLength === 10) {
    inputPhone.value += "-";
  }
});

// SCROLL REVEAL

// window.sr = ScrollReveal({ reset: true });

// // ABOUT ME

// sr.reveal(".aboutMe__myPicture", {
//   origin: "right",
//   distance: "30px",
//   duration: 2000,
// });

// // SKILLS

// sr.reveal("#skill1", {
//   distance: "30px",
//   duration: 2000,
// });
