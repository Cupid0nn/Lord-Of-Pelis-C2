const {getALLmovies, PostMovies} = require("../services/movieService");


module.exports =  {
    getMovies: async (req, res) => {
        try{
            res.status(200);
            res.send(await getALLmovies());
        } catch (err) {
            console.log('ha ocurrido un error', err);
        }
},
postMovies: async (req, res) => {
    try{
        console.log(req.body);
    await PostMovies(req.body.title, req.body.year, req.body.director,req.body.duration,req.body.genre, req.body.rate, req.body.poster);
    res.send("Todo OK :D")
    } catch (err) {
        console.log('ha ocurrido un error', err);
    }
},

}