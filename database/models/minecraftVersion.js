const mongoose = require('mongoose');

// All properties come from Mojang's version_manifest
// https://launchermeta.mojang.com/mc/game/version_manifest_v2.json
const minecraftVersionSchema = mongoose.Schema({
  // Examples: 21w06a, 1.16.5, 1.6.4-pre1
  releaseId: String,
  releaseType: String,
  // The time this version was last updated in the manifest
  time: Date,
  // The original release date for this version
  releaseTime: Date,
});

module.exports = mongoose.model('MinecraftVersion', minecraftVersionSchema);
