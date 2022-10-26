const nombre = document.getElementById("name");
const correo = document.getElementById("email");
const mensaje = document.getElementById("mesagge");
const telefono = document.getElementById("phone");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e => {
    e.preventDefault();

    let warnings = "";
    let enviado = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    parrafo.innerHTML = "";

    if (nombre.value.length < 3) {
        warnings += `-El nombre debe tener minimo 3 caracteres <br>`;
        enviado = true;
    }

    if (!regexEmail.test(correo.value)) {
        warnings += `-El email no es valido <br>`;
        enviado = true;
    }

    if (mensaje.value.length < 20) {
        warnings += `-El mensaje no puede tener menos de 20 caracteres <br>`;
        enviado = true;
    }

    if (telefono.value.length < 10) {
        warnings += `-El telefono no puede tener menos de 10 caracteres <br>`;
        enviado = true;
    }

    if (enviado) {
        parrafo.innerHTML = warnings;
    } else
        parrafo.innerHTML = "Tu mensaje ha sido enviado, muchas gracias. <br> <h3>Aguante El Ciclon¡¡</h3>";

});
