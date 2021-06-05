//Comentario de linea
/* o un comentario de bloque
*/
document.querySelector("#btn-aceptar")
    .addEventListener("click", () => { 
        laEntrada = document.querySelector("#entrada")
        parrafo = document.createElement("p")
        elfolio = document.querySelector("#folio")
        elfolio.appendChild(parrafo)
        parrafo.innerHTML = laEntrada.value

    })
