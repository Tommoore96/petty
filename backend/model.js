const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Car = new Schema({
  reg: String,
  mpg: Number
});

module.exports = mongoose.model('Car', Car)
