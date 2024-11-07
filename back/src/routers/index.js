const express = require("express");
const {indexRouter} = require("./indexRouter")
const {routerMovies} = require("./routerMovies")
const router = express.Router();

router.use("/", indexRouter);
router.use("/movies", routerMovies);

module.exports = {router}