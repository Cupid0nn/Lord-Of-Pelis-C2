export function addMovieCard(pelicula, container) {
    const card = document.createElement('div');
    card.classList.add('card');
  
    card.innerHTML = `
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="${pelicula.poster}" alt="${pelicula.title}">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">${pelicula.title} (${pelicula.year})</p>
            <p class="subtitle is-6">${pelicula.director}</p>
          </div>
        </div>
        <div class="content">
          <p><strong>Duración:</strong> ${pelicula.duration}</p>
          <p><strong>Género:</strong> ${pelicula.genre.join(', ')}</p>
          <p><strong>Rate:</strong> ${pelicula.rate}</p>
        </div>
      </div>
    `;
  
    container.appendChild(card);
  }
  