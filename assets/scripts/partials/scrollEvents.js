document.addEventListener("DOMContentLoaded", () => {
  const button__ReturnTop = document.querySelector("#button__ReturnTop");

  window.onscroll = () => {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      button__ReturnTop.style.display = "grid";
    } else {
      button__ReturnTop.style.display = "none";
    }
  }

  button__ReturnTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
