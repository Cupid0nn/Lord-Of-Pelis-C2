// este script es para obtener las pelis de la API y mostrarlas en el HTML con el DOM //
export function fetchMovies(addMovieCard, container) {
    fetch('http://localhost:3000/movies')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener las peliculas');
        }
        return response.json();
      })
      .then(data => {
        console.log('Datos recibidos:', data);
        data.forEach(pelicula => addMovieCard(pelicula, container));
      })
      .catch(error => console.error('Error al obtener las películas:', error));
  }
  