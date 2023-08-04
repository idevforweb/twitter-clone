// Require mongoose library

const mongoose = require('mongoose');

// Test: Add connection String

const connectionString =
  'mongodb+srv://kalibAdmin:Knb060315!@cluster0.hh9duqu.mongodb.net/?retryWrites=true&w=majority';

const localConnectionString =
  'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1';

// Create Database class

class Database {
  // create constructor

  constructor() {
    this.connect();
  }

  // Create connect method

  connect() {
    // Connect mongodb thru mongoose

    mongoose
      .connect(localConnectionString)
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
