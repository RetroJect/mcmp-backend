const mongoose = require('mongoose');

const schemaOptions = {
  // Automatically adds createdAt and updatedAt fields
  timestamps: true,
};

const commentSchema = new mongoose.Schema({
  // When making queries, use .populate('author') to have mongoose
  // fill in the User info from the ObjectId
  author: {
    type: mongoose.Types.ObjectId,
    ref: 'User', // The collection the Id belongs to
  },
  message: String,
}, schemaOptions);

module.exports = mongoose.model('Comment', commentSchema);
