const mongoose = require('mongoose');

const modSchema = mongoose.Schema({
  name: String,
  author: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  versions: [{
    type: mongoose.Types.ObjectId,
    ref: 'ModFile',
  }],
  discussionThread: {
    type: mongoose.Types.ObjectId,
    ref: 'CommentThread',
  },
  // Link to git repository
  repository: String,
  // Link to author's website or mod page
  homepage: String,
  // Archived if no longer being developed
  archived: Boolean,
});

module.exports = mongoose.model('Mod', modSchema);
