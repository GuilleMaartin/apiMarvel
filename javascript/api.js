const contenedorMovies = document.getElementById("contenedor-movies")

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '47987fa1demsh01af107b0ce55cfp1a0d4ejsn573b6e12d552',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=marvel', options)
	.then(response => response.json())
	.then(peliculas => {
        console.log(peliculas)
        const arrayMovies = peliculas.d
        arrayMovies.map((pelicula) =>{
            const titulo = pelicula.l
            const image = pelicula.i.imageUrl
            const cast = pelicula.s
            console.log(titulo)
            console.log(image)
            console.log(cast)

            const poster = 
                `   <div>
                        <img src="${image}" alt="">
                        <h2>${titulo}</h2>
                        <p>Protagonistas: ${cast} --</p>
                        <a href="">Mirar Ahora</a>
                    </div>`

            contenedorMovies.innerHTML += poster
        })
    })
	.catch(err => console.error(err));

    