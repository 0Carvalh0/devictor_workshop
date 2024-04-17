let typed = new Typed("#myNameTyping", {
  strings: ["João Victor", "Carvalho de Souza"],
  typeSpeed: 80,
  backSpeed: 60,
  backDelay: 1000,
  loop: true,
});

const inputPhone = document.querySelector("#inputPhone");

inputPhone.addEventListener("keypress", () => {
  let inputPhoneLenght = inputPhone.value.length

  if(inputPhoneLenght === 0) {
    inputPhone.value += "("
  } else if(inputPhoneLenght === 3) {
    inputPhone.value += ") "
  } else if(inputPhoneLenght === 10) {
    inputPhone.value += "-"
  }
})
