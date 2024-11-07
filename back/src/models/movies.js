const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    genre: {
      type: [String],
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const movie = mongoose.model("movie", moviesSchema);

module.exports = movie;
