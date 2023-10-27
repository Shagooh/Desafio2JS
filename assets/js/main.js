// Parte 1
var imagen = document.getElementById('img')
function script(){
    if(imagen.style.border){
        imagen.style.border = ''
    }else{
        imagen.style.border = '2px solid red'
    }
}

// Parte 2
cantidad = document.getElementById("cantidad")
function verificar(){
    let sticker1 = Number(document.getElementById("input1").value);
    let sticker2 = Number(document.getElementById("input2").value);
    let sticker3 = Number(document.getElementById("input3").value);
    var total = sticker1 + sticker2 + sticker3

    if(total <= 10){
        cantidad.innerHTML = total
    }else{
        cantidad.innerHTML = "demasiados"
    }
}

// Parte 3
var texto = document.getElementById("texto");
function Ingresar(){

let valueOpcion1 = document.getElementById("opcion1").value;
let valueOpcion2 = document.getElementById("opcion2").value;
let valueOpcion3 = document.getElementById("opcion3").value;

    if(valueOpcion1 === "9" && valueOpcion2 === "1" && valueOpcion3 === "1"){
        texto.innerHTML = "Password 1 correcta"
        texto.style.color = "green"
    }else if (valueOpcion1 === "7" && valueOpcion2 === "1" && valueOpcion3 === "4") {
        texto.innerHTML = "Password 2 correcta"
        texto.style.color = "green"
    } else{
        texto.innerHTML = "Password incorrecta"
        texto.style.color = "red"
    }
}