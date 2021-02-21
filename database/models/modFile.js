const mongoose = require('mongoose');

const modFileSchema = mongoose.Schema({
  // ObjectId of the GridFS Bucket storing binary data
  file: mongoose.Types.ObjectId,
  link: String, // External download
  version: String,
  tag: String,
  mod: {
    type: mongoose.Types.ObjectId,
    ref: 'Mod',
  },
  minecraftVersion: {
    type: mongoose.Types.ObjectId,
    ref: 'MinecraftVersion',
  },
  modFramework: {
    type: mongoose.Types.ObjectId,
    ref: 'ModFramework',
  },
  // The list of dependencies the mod requires
  dependencies: [{
    type: mongoose.Types.ObjectId,
    ref: 'ModFile',
  }],
});

module.exports = mongoose.model('ModFile', modFileSchema);
