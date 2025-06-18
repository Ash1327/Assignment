const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const configRoute = require('./route/configRoute');

const app = express();
const PORT = 8080;

// Enable CORS for all routes
app.use(cors());
// Parse JSON bodies
app.use(express.json());

// Debug middleware to log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Connect to MongoDB using the provided connection string
mongoose.connect('mongodb+srv://development:X3TcC8tKnI5JINuR@betalive.9sakb.gcp.mongodb.net/database')
  .then(() => console.log('MongoDB connected'))
  .catch(console.error);

// Serve static frontend files
app.use(express.static('frontend'));

// Redirect root URL to fetch.html
app.get('/', (req, res) => {
  res.redirect('/fetch.html');
});

// Redirect /update to /update.html
app.get('/update', (req, res) => {
  res.redirect('/update.html');
});

// Mount configuration routes under /api
app.use('/api', configRoute);

// 404 handler for unmatched routes
app.use((req, res) => {
  console.log(`404 - Route not found: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ error: 'Route not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
