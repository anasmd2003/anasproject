// models/busModel.js
const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  busNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  route: [
    {
      stopName: {
        type: String,
        required: true,
      },
      lat: {
        type: Number,
        required: true,
      },
      lng: {
        type: Number,
        required: true,
      },
    },
  ],
  currentLocation: {
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
});

const Bus = mongoose.model('Bus', busSchema);

module.exports = Bus;
