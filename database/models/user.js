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

userSchema.virtual('fullName').get(function getFullName() {
  return `${this.name.first} ${this.name.last}`;
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
