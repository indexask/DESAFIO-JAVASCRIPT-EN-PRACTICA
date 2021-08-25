const form = document.getElementById("formulario");

const espacioResultado = document.querySelector(".resultado")

const espacioErrorNombre = document.querySelector(".errorNombre");
const espacioErrorAsunto = document.querySelector(".errorAsunto");
const espacioErrorMensaje = document.querySelector(".errorMensaje");

const mensajeAprobacion = "¡El mensaje se ha enviado con éxito!"
const mensajeError = "La información ingresada no es válida."

// creamos la función que verifica un campo de texto
const verificar = function(texto) {
    let aprobado = /[a-zA-Z]/gm.test(texto);
    return aprobado
}

const borrarCampo = function(campo){
    campo.innerHTML = "";
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // verificacion de nombre
    let formNombre = document.getElementById("nombre");
    verificar(formNombre.value)
        ? borrarCampo(espacioErrorNombre)
        : espacioErrorNombre.innerHTML = mensajeError

    // verificacion de asunto
    let formAsunto = document.getElementById("asunto");
    verificar(formAsunto.value)
        ? borrarCampo(espacioErrorAsunto)
        : espacioErrorAsunto.innerHTML = mensajeError

    // verificacion de mensaje
    let formMensaje = document.getElementById("mensaje");
    verificar(formMensaje.value)
        ? borrarCampo(espacioErrorMensaje)
        : espacioErrorMensaje.innerHTML = mensajeError
    
    if (verificar(formNombre.value) && verificar(formAsunto.value) && verificar(formMensaje.value)){ 
        espacioResultado.innerHTML = mensajeAprobacion;
    }
    else{
        e.preventDefault();
    }
})

