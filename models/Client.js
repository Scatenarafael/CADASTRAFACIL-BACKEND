const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cnpj: { type: String },
  address: { type: String, required: true },
  latitude: { type: Number},
  longitude: { type: Number},
  business_line: { type: String, required: true },
  about: { type: String },
  contact: {
    name: { type: String, required: true },
    cel: { type: String, required: true },
    business_position: { type: String, required: true }
  },
  images: []
});

module.exports = mongoose.model('Client', clientSchema);