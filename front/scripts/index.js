import { addMovieCard } from './addMovieCard.js';
import { fetchMovies } from './fetchMovies.js';
import { validateForm } from './formValidation.js';

document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('cajapelis');
  const form = document.getElementById('form-add-movie');
  const tempData = [];

  // Llamar a la función para obtener las películas
  fetchMovies(addMovieCard, container);

  form.addEventListener('submit', function(event) {
    validateForm(event, tempData, addMovieCard, container);
  });
});
