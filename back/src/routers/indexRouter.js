const express = require("express"); 
const {indexcontroller} = require("../controllers/indexController");
const indexRouter = express.Router();

indexRouter.get("/", (req,res) => {
    console.log("hola");
    res.send("Hola, regrese luego");
})


module.exports = {indexRouter};
