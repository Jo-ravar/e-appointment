const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const addressSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    default: 'IN',
  },
  pin: {
    type: Number,
    required: true,
  },
  state: {
    type: String,
    default: 'Rajasthan',
  },
});

module.exports = addressSchema;
