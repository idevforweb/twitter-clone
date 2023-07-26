// Require mongoose library

const mongoose = require('mongoose');

// Create Database class

class Database {
  // create constructor

  constructor() {
    this.connect();
  }

  // Create connect method

  connect() {
    // Test: Add connection String

    const connectionString =
      'mongodb+srv://kalibAdmin:Knb060315!@cluster0.hh9duqu.mongodb.net/?retryWrites=true&w=majority';

    // Connect mongodb thru mongoose

    mongoose
      .connect(connectionString)
      .then(() => {
        // if db connection successfull
        console.log('Database connected.');
      })
      .catch((err) => {
        // if db connection unsuccessfull
        console.log(`Database connection error ${err}`);
      });
  }
}

// Export module

module.exports = new Database();
