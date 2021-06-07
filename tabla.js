
function limpiarPantalla (){
    items = document.querySelectorAll("#folio p")
    for (let i=0; i < items.length; i++){
       items[i].remove()
    }
}

for (let i= items.length-1; i>=; i++){
    items[i].remove()
 }/*recorrer los bucles a la inversa/*

/*
function limpiarPantalla (){
    elfolio = document.querySelector("#folio")
    elfolio.innerHTML = '';
}

function esEntero(numero) {
    if (Number.isInteger(numero)){
        return true;
    }else {
        return false;
    }
}

let boton = document.querySelector("#btn-mostrar")

boton.addEventListener("click", function multiplica(numero){
        numero = document.querySelector("#entrada").value
        if (esEntero(parseInt(numero) === true){
            parrafo = document.querySelector("p")
            if (parrafo != null) {
            limpiarPantalla()
            } 
            for (let i=0; i < 11; i++){
                parrafo = document.createElement("p")
                elfolio = document.querySelector("#folio")
                elfolio.appendChild(parrafo)
                parrafo.innerHTML = `${numero} x ${i}= ${numero*i}`
            }
        }else{
            alert ("Debes introducir un número entero")
        }
    })

let botonB = document.querySelector("#btn-borrar")
botonB.addEventListener("click",limpiarPantalla)

*/


