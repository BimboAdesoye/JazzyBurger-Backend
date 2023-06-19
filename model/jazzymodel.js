const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const burgerSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const BURGERS = mongoose.model("singleBurger", burgerSchema);

module.exports = BURGERS;
