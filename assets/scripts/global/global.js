// TYPING ANIMATION

let typed = new Typed("#myNameTyping", {
  strings: ["João Victor", "Carvalho de Souza"],
  typeSpeed: 80,
  backSpeed: 60,
  backDelay: 1000,
  loop: true,
  showCursor: false,
});

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

// CARROUSEL

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// SCROLL REVEAL

window.sr = ScrollReveal({ reset: true });

// ABOUT ME

sr.reveal(".aboutMe__myPicture", {
  origin: "right",
  distance: "30px",
  duration: 2000,
});

// SKILLS

sr.reveal("#skill1", {
  distance: "30px",
  duration: 2000,
});

sr.reveal("#skill2", {
  distance: "30px",
  duration: 2000,
});

sr.reveal("#skill3", {
  distance: "30px",
  duration: 2000,
});

sr.reveal("#skill4", {
  distance: "30px",
  duration: 2000,
});

sr.reveal("#skill5", {
  distance: "30px",
  duration: 2000,
});

sr.reveal("#skill6", {
  distance: "30px",
  duration: 2000,
});

sr.reveal("#skill7", {
  distance: "30px",
  duration: 2000,
});

sr.reveal("#skill8", {
  distance: "30px",
  duration: 2000,
});

sr.reveal("#skill9", {
  distance: "30px",
  duration: 2000,
});

sr.reveal("#skill10", {
  distance: "30px",
  duration: 2000,
});

sr.reveal("#skill11", {
  distance: "30px",
  duration: 2000,
});

sr.reveal("#skill12", {
  distance: "30px",
  duration: 2000,
});

sr.reveal("#skill13", {
  distance: "30px",
  duration: 2000,
});

sr.reveal("#skill14", {
  distance: "30px",
  duration: 2000,
});

// FORM

sr.reveal("#inputName", {
  distance: "40px",
  duration: 2000,
});

sr.reveal("#inputEmail", {
  distance: "40px",
  duration: 2000,
  delay: 500,
});

sr.reveal("#inputPhone", {
  distance: "40px",
  duration: 2000,
  delay: 1000,
});

sr.reveal("#inputMessage", {
  distance: "40px",
  duration: 2000,
  delay: 1500,
});
