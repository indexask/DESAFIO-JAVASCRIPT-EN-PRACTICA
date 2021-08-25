const caja = document.getElementById("caja");
const botones = document.getElementsByTagName("button");

botonesArray = Array.from(botones)
botonesArray.forEach(boton => {
    boton.addEventListener("click", e=>{
        var colorEscogido = boton.style.backgroundColor;
        caja.style.backgroundColor = colorEscogido;
    })
});