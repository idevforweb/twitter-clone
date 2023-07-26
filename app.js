//  Set up express

const express = require('express');
const app = express();
const port = 3000;

// Require Mongoose
// Test: Add connection String
// Connect mongo db mongoose

const mongoose = require('mongoose');
const connectionString =
  'mongodb+srv://kalibAdmin:Knb060315!@cluster0.hh9duqu.mongodb.net/?retryWrites=true&w=majority';
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

// Set up server

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Require body parser libray
// Tell app to use body parser

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Set view engine to pug
// Set views folder : Tell server where to look for pug files

app.set('view engine', 'pug');
app.set('views', 'views');

/* Serving Static files */

// Require path library
// Add path to public folder

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
// Require middleware module

const middleware = require('./middleware');

// Reruire Router Instances

const loginRoute = require('./routes/loginRoutes'); // Add loginRoute instance
const registerRoute = require('./routes/registerRoutes'); // Add registerRoute instance

// Use routes

app.use('/login', loginRoute); // Tell app to use login route
app.use('/register', registerRoute); // Tell app to use register route

// Home route

app.get('/', middleware.requireLogin, (req, res, next) => {
  // home.pug template properties
  let payload = {
    pageTitle: 'home',
  };
  res.status(200).render('home', payload);
});
