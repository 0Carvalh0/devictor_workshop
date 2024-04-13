let typed = new Typed("#meu-nome", {
  strings: ["João Victor"],
  typeSpeed: 80,
  backSpeed: 60,
  backDelay: 1000,
  loop: true,
});

const inputPhone = document.querySelector("#itel");

inputPhone.addEventListener("keypress", () => {
  let inputLenght = inputPhone.value.length

  if(inputLenght === 0) {
    inputPhone.value += "("
  } else if(inputLenght === 3) {
    inputPhone.value += ") "
  } else if(inputLenght === 10) {
    inputPhone.value += "-"
  }
})
