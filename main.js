
const telaTel = document.querySelector('input[type=tel]');
const listaTel = document.querySelectorAll('input[type=button]');

for (let contador = 0; contador < listaTel.length; contador++ ) {
    const tecla = listaTel[contador];
    
    tecla.onclick = function () {
        telaTel.value += tecla.value;
    }
}

