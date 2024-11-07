const express= require ("express");
const {getMovies, postMovies} = require("../controllers/moviesController");
const routerMovies = express.Router();


routerMovies.get("/", getMovies);
routerMovies.post("/", postMovies);

module.exports = {routerMovies}