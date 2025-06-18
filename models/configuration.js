const mongoose = require('mongoose');

// Define the schema for configuration documents
const configSchema = new mongoose.Schema({
  configId: String,      // Unique identifier for the configuration
  data: [[String]],      // 2D array of symbols
  remark: String,        // Remark or note for the configuration
});

// Export the Configuration model
module.exports = mongoose.model('Configuration', configSchema);
