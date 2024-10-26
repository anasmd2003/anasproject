// controllers/busController.js
const Bus = require('../models/busModel');

// Get bus route
const getBusRoute = async (req, res) => {
  const { busNumber } = req.params;
  try {
    const bus = await Bus.findOne({ busNumber });
    if (!bus) {
      return res.status(404).json({ message: 'Bus not found' });
    }
    res.json(bus.route);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get current bus location
const getCurrentBusLocation = async (req, res) => {
  const { busNumber } = req.params;
  try {
    const bus = await Bus.findOne({ busNumber });
    if (!bus) {
      return res.status(404).json({ message: 'Bus not found' });
    }
    res.json(bus.currentLocation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getBusRoute, getCurrentBusLocation };
