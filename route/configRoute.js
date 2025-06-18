const express = require('express');
const router = express.Router();
const Configuration = require('../models/configuration');



// Fetches the 2D array data for a given configuration ID
router.get('/configurations/:id', async (req, res) => {

  try {
    const config = await Configuration.findOne({ configId: req.params.id });
    if (!config) {
      return res.status(404).json({ error: 'Configuration not found' });
    }
    res.json(config.data);
  } catch (error) {
    console.error('Error fetching configuration:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Updates the remark field for a given configuration ID
router.put('/configurations/:id', async (req, res) => {

  try {
    const { remark } = req.body;
    const result = await Configuration.updateOne({ configId: req.params.id }, { remark });
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Configuration not found' });
    }
    res.json({ message: 'success' });
  } catch (error) {
    console.error('Error updating configuration:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
