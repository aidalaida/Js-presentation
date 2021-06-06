document.querySelector("#btn-aceptar")
    .addEventListener("click", () => { 
        laEntrada = document.querySelector("#entrada")
        parrafo = document.createElement("p")
        elfolio = document.querySelector("#folio")
        elfolio.appendChild(parrafo)
        /*
        --> Hacer llamada al servidor de pyhton (en el puerto 5000)
        --> me va a devolver un JSON
        --> vamos a meter el json en el parrafo 
        */

        parrafo.innerHTML = 
    })
