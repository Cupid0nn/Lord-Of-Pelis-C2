const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const {router} = require("./routers/index");
const DB = require("./config/dbConnect");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(router);

module.exports = {app};