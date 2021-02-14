const express = require('express');
const passport = require('passport');
const User = require('../../database/models/user');

const auth = express.Router();

/* Base code from this blog post:
 * https://mherman.org/blog/user-authentication-with-passport-dot-js/
 */

auth.post('/login', passport.authenticate('local'), (req, res) => {
  console.log(`${req.user.username} successfully logged in`);
  res.status(200);
});

auth.post('/logout', (req, res) => {
  req.logout();
  res.status(200);
});

auth.post('/register', (req, res) => {
  const { username, password } = req.body;

  User.register(new User({ username }), password, (error) => {
    // If not able to register, send error
    if (error) {
      return res.status(500).json({ error });
    }

    // On successful register, send username back
    return res.status(200).json({ username });
  });
});

module.exports = auth;
