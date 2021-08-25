
const resultado = document.getElementsByClassName("resultado")[0]

const sumar = function (){
    const valor1 = parseFloat(document.getElementById("valor1").value)
    const valor2 = parseFloat(document.getElementById("valor2").value)
    const suma = valor1 + valor2
    resultado.innerHTML = suma

}

const restar = function (){
    const valor1 = parseFloat(document.getElementById("valor1").value)
    const valor2 = parseFloat(document.getElementById("valor2").value)
    let resta = valor1 - valor2
    if (resta >= 0){
        resultado.innerHTML = resta
    }
    else{ 
        resultado.innerHTML = 0
    }
}

botonsuma = document.getElementById("btn-sumar")
botonsuma.addEventListener("click", sumar)

botonresta = document.getElementById("btn-restar")
botonresta.addEventListener("click", restar)