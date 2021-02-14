const mongoose = require('mongoose');

const mongoDatabaseName = process.env.MONGO_DATABASE_NAME || 'MCMP';
const mongoHost = process.env.MONGO_HOST || 'localhost';
const mongoURL = `mongodb://${mongoHost}/${mongoDatabaseName}`;

// Connect to MongoDB
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch((error) => console.log(`Error connecting to MongoDB: ${error}`));

const database = mongoose.connection;

module.exports = database;
