require('dotenv').config();
const mongoose = require('mongoose');

function connectToDb() {
  mongoose.connect(process.env.DB_CONNECT);

  // Add event listeners for better debugging
  mongoose.connection.on('connected', () => {
    console.log('DB is connected');
  });

  mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
  });
}

module.exports = connectToDb;