require('dotenv').config();

/* Main Modules */
const express = require('express');
const expressSession = require('express-session');

/* Express Middleware */
const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

/* API Routers */
const api = require('./api');

/* Database */
const database = require('./database');
const User = require('./database/models/user');

// Create the express server
const app = express();
const PORT = process.env.EXPRESS_PORT || 3001;

/* Initialize Middleware */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.APP_SECRET));
app.use(expressSession());

/* Initialize Passport */
app.use(passport.initialize());
app.use(passport.session());

// Tells passport to use the User model for username/password auth
passport.use(new LocalStrategy(User.authenticate()));
// Tells passport how to serialize and deserialize a User for a session
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/api', api);

database.on('error', console.error.bind(console, 'Database connection error:'));

database.once('open', () => {
  console.log('Database connected, starting Express');
  app.listen(PORT, () => console.log(`MCMP API started on port ${PORT}`));
});
