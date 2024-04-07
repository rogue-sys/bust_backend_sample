const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  arrivalTime: String,
  busName: String,
  // Add other fields as needed
});

module.exports = mongoose.model('Bus', busSchema);