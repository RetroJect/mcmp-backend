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

// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

app.use('/api', api);

// database.once('connected', () => {
//   console.log('Database connected, starting Express');
//   app.listen(PORT, () => console.log(`MCMP API started on port ${PORT}`));
// });

app.listen(PORT, () => console.log(`MCMP API started on port ${PORT}`));
