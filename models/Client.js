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
    phone: { type: String, required: true }
  }
});

module.exports = mongoose.model('Client', clientSchema);