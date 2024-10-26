// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const busRoutes = require('./routes/busRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', busRoutes);

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
