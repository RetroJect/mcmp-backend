const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  locale: String,
  name: {
    first: String,
    last: String,
  },
});

// Disabled rule as the function needs 'this' binding support
// eslint-disable-next-line func-names
userSchema.virtual('fullName').get(function () {
  return `${this.name.first} ${this.name.last}`;
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
