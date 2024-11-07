// index.spec.js

describe("Movie Addition Functionality", function() {
    let form, tempData;
  
    beforeEach(function() {
      // Cargar el archivo tempData.js
      tempData = [
        {
          title: "Guardians of the Galaxy Vol. 2",
          year: 2017,
          director: "James Gunn",
          duration: "2h 16min",
          genre: ["Action", "Adventure", "Comedy"],
          rate: 7.7,
          poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
        }
      ];
  
      // Configurar el DOM del formulario
      document.body.innerHTML = `
        <form id="form-add-movie">
          <input type="text" id="MovieName" value="Star Wars: Episode IV - A New Hope" required>
          <input type="number" id="MovieYear" value="1977" required>
          <input type="text" id="MovieDirector" value="George Lucas" required>
          <input type="text" id="MovieDuration" value="2h 1min" required>
          <input type="text" id="MovieGenre" value="Action, Adventure, Fantasy, Sci-Fi" required>
          <input type="number" step="0.1" id="MovieRate" value="8.7" required>
          <input type="url" id="MoviePoster" value="https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg" required>
          <button type="submit" id="addMovie">Añadir Película</button>
        </form>
        <div id="cajapelis"></div>
      `;
  
      // Cargar el archivo index.js
      const script = document.createElement('script');
      script.src = '../scripts/index.js';
      document.head.appendChild(script);
    });
  
    it("should add a new movie to tempData", function() {
      const event = new Event('submit');
      document.getElementById('form-add-movie').dispatchEvent(event);
  
      expect(tempData.length).toBe(2);
      expect(tempData[1].title).toBe("Star Wars: Episode IV - A New Hope");
      expect(tempData[1].year).toBe(1977);
      expect(tempData[1].director).toBe("George Lucas");
    });
  
    it("should update the UI with the new movie", function() {
      const event = new Event('submit');
      document.getElementById('form-add-movie').dispatchEvent(event);
  
      const moviesContainer = document.getElementById('cajapelis');
      expect(moviesContainer.children.length).toBe(1);
      expect(moviesContainer.children[0].querySelector('h3').textContent).toBe("Star Wars: Episode IV - A New Hope (1977)");
    });
  });
  