// routes/busRoutes.js
const express = require('express');
const { getBusRoute, getCurrentBusLocation } = require('../controllers/busController');

const router = express.Router();

// Get bus route
router.get('/bus/:busNumber/route', getBusRoute);

// Get current bus location
router.get('/bus/:busNumber/location', getCurrentBusLocation);

module.exports = router;
