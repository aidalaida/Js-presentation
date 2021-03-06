var folio = document.querySelector("#folio")

function limpiarFolio() {
    elfolio = document.querySelector("#folio")
    elfolio.innerHTML = '';

}
function gestionaRespuestaAsincrona() {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText)
        const respuesta = JSON.parse(this.responseText)

        if(respuesta.Response === 'False') {
            alert("No se han encontrado resultados")
            return
        }
        limpiarFolio()

        for (let i=0; i < respuesta.Search.length; i++) {
            const pelicula = respuesta.Search[i]

            const div = document.createElement("div")
            div.className = "pelicula"

            const img = document.createElement("img")
            img.setAttribute("src", pelicula.Poster)
            img.setAttribute("alt", "Carátula de la película")

            const p = document.createElement("p")
            const textoP = `${pelicula.Title} (${pelicula.Year})`
            p.innerHTML = textoP

            const btn = document.createElement("a")
            btn.setAttribute("href", `https://www.imdb.com/title/${pelicula.imdbID}/`)
            btn.setAttribute("target", "_blank")
            btn.className = "button"
            btn.classList.add("info")
            btn.innerHTML = "Más info..."

            p.appendChild(btn)

            div.appendChild(img)
            div.appendChild(p)
           

            folio.appendChild(div)

        }
    }
}

const  xhr = new XMLHttpRequest()
xhr.onload = gestionaRespuestaAsincrona


document.querySelector("#buscar")
    .addEventListener("click", () => {
        const palabras = document.querySelector("#entrada").value
        xhr.open('GET', `http://www.omdbapi.com/?s=${palabras}&apikey=da22215a`, true)
        xhr.send()
        console.log("He lanzado petición")
    })
