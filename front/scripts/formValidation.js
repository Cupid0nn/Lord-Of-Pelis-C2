import { isValidURL } from './isValidURL.js';

export function validateForm(event, tempData, addMovieCard, container) {
  event.preventDefault();

  document.querySelectorAll('.help.is-danger').forEach(el => el.textContent = '');
  document.querySelectorAll('.input').forEach(el => el.classList.remove('is-danger'));

  const movieName = document.getElementById('MovieName').value.trim();
  const movieYear = document.getElementById('MovieYear').value.trim();
  const movieDirector = document.getElementById('MovieDirector').value.trim();
  const movieDuration = document.getElementById('MovieDuration').value.trim();
  const movieGenre = document.getElementById('MovieGenre').value.trim();
  const movieRate = document.getElementById('MovieRate').value.trim();
  const moviePoster = document.getElementById('MoviePoster').value.trim();

  let isValid = true;

  // Validar inputs
  if (!movieName) {
    isValid = false;
    document.getElementById('MovieNameError').textContent = 'El nombre de la película es obligatorio.';
    document.getElementById('MovieName').classList.add('is-danger');
  }

  if (!movieYear || isNaN(movieYear) || parseInt(movieYear) <= 0) {
    isValid = false;
    document.getElementById('MovieYearError').textContent = 'El año de la película es obligatorio y debe ser un número positivo.';
    document.getElementById('MovieYear').classList.add('is-danger');
  }

  if (!movieDirector) {
    isValid = false;
    document.getElementById('MovieDirectorError').textContent = 'El director de la película es obligatorio.';
    document.getElementById('MovieDirector').classList.add('is-danger');
  }

  if (!movieDuration) {
    isValid = false;
    document.getElementById('MovieDurationError').textContent = 'La duración de la película es obligatoria.';
    document.getElementById('MovieDuration').classList.add('is-danger');
  }

  if (!movieGenre) {
    isValid = false;
    document.getElementById('MovieGenreError').textContent = 'El género de la película es obligatorio.';
    document.getElementById('MovieGenre').classList.add('is-danger');
  }

  if (!movieRate || isNaN(movieRate) || parseFloat(movieRate) < 0 || parseFloat(movieRate) > 10) {
    isValid = false;
    document.getElementById('MovieRateError').textContent = 'La calificación de la película es obligatoria y debe estar entre 0 y 10.';
    document.getElementById('MovieRate').classList.add('is-danger');
  }

  if (!moviePoster || !isValidURL(moviePoster)) {
    isValid = false;
    document.getElementById('MoviePosterError').textContent = 'El enlace del póster de la película es obligatorio y debe ser una URL válida.';
    document.getElementById('MoviePoster').classList.add('is-danger');
  }

  // Si es válido, añadir la película
  if (isValid) {
    const newMovie = {
      title: movieName,
      year: parseInt(movieYear),
      director: movieDirector,
      duration: movieDuration,
      genre: movieGenre.split(',').map(genre => genre.trim()),
      rate: parseFloat(movieRate),
      poster: moviePoster
    };

    console.log('Nueva película añadida:', newMovie);

    // Agregar la nueva película al array tempData
    tempData.push(newMovie);

    // Agregar la nueva película al DOM
    addMovieCard(newMovie, container);
  }
}
