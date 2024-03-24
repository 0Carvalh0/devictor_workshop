const meuNome = document.querySelector("#meu-nome");

function typeWriter(element) {
  const textoArray = element.innerHTML.split("");
  element.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => {
      element.innerHTML += letra;
    }, 100 * i);
  });
}

setTimeout(() => {
  typeWriter(meuNome);
}, 1000);
