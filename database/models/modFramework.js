const mongoose = require('mongoose');

const modFrameworkSchema = mongoose.Schema({
  // The title of the framework
  title: String, // Forge, Fabric, etc.
  tag: String, // Alpha, Beta, Release
  version: String,
  link: String, // A link to download the framework
});

module.exports = mongoose.model('ModFramework', modFrameworkSchema);
