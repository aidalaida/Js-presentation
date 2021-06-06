function limpiarPantalla (){
    elfolio = document.querySelector("#folio")
    elfolio.innerHTML = '';
}

let boton = document.querySelector("#btn-mostrar")

boton.addEventListener("click", function multiplica(numero){
    numero = document.querySelector("#entrada").value
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
})

let botonB = document.querySelector("#btn-borrar")
botonB.addEventListener("click",limpiarPantalla)

/*
botonB.addEventListener("click", () => { 
   
    parrafo = document.querySelectorAll("p")
    elfolio = document.querySelector("#folio")
    elfolio.remove(parrafo)

})
*/



