const mongoose = require("mongoose");
require("dotenv").config();

const { DB_NAME } = process.env;
const { DB_HOST } = process.env;
const { DB_USER } = process.env;
const { DB_PASSWORD } = process.env;
const { DB_TYPE } = process.env;
const { DB_ADD } = process.env;


const URI = `mongodb+srv://malaucierno:Justicia3025@clusterhenry.abwvzau.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const DB = async () => {
  try {
    await mongoose.connect(URI);
  } catch (err) {
    console.log("Error connnecting to mongoDB", err);
  }
};

module.exports = DB;
