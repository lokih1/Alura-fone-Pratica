const telaTel = document.querySelector("input[type=tel]");
const listaTel = document.querySelectorAll("input[type=button]");

for (let contador = 0; contador < listaTel.length; contador++) {
  const tecla = listaTel[contador];

  tecla.onclick = function () {
    telaTel.value += tecla.value;
  };
  tecla.onkeydown = function (e) {
    if (e.code === "Space" || e.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };
  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
