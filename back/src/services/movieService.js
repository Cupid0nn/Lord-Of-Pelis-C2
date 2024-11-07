const Movie = require("../models/movies.js");

const getALLmovies = async () => {
        try {
            const movies = await Movie.find().limit(10);
            return movies;
        }  catch (err) {
            console.log('Ha ocurrido un error', err);
        }
    }

    
  const  PostMovies = async (title, year, director, duration, genre, rate, poster) => {
        const movie = new Movie({
            title,
            year,
            director,
            duration,
            genre,
            rate,
            poster,
            
        });
        try {
            await movie.save();
            return movie;
        } catch (err) {
            console.log('Ha ocurrido un error', err);
        }
    }
    
    
    module.exports = {getALLmovies, PostMovies}