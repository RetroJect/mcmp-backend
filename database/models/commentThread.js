const mongoose = require('mongoose');

const schemaOptions = {
  // Automatically adds createdAt and updatedAt fields
  timestamps: true,
};

const commentThreadSchema = new mongoose.Schema({
  comments: [{
    type: mongoose.Types.ObjectId,
    ref: 'Comment',
  }],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  // Archiving a thread makes it read-only
  archived: Boolean,
}, schemaOptions);

module.exports = mongoose.model('CommentThread', commentThreadSchema);
