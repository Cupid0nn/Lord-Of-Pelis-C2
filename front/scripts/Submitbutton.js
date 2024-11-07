const form = document.getElementById('form-add-movie');
const deleter = document.getElementById('deleteMovie');
const SubirData = (algo) => {
const body = {
   "title": document.getElementById('MovieName').value,
    "year": document.getElementById('MovieYear').value,
    "director": document.getElementById('MovieDirector').value,
    "duration": document.getElementById('MovieDuration').value,
    "genre": document.getElementById('MovieGenre').value,
    "rate": document.getElementById('MovieRate').value,
    "poster": document.getElementById('MoviePoster').value
}


fetch('http://localhost:3000/movies', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
      body : JSON.stringify(body) 
})
    .then(data => console.log(data))
    .catch(error => console.error(error));
     form.reset();
}


form.addEventListener('submit', (event) => {
  event.preventDefault();
  SubirData(event);
});

deleter.addEventListener('click', function () {
  document.getElementById('form-add-movie').reset(); 
});
