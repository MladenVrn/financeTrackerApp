const mongoose = require('mongoose');

//1. create a schema
const FinancesSchema = new mongoose.Schema({
    description: String,
    number: Number
  });

  //create model
  const Finances = mongoose.model('Finances', FinancesSchema);

  module.exports = Finances;