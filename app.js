//  Set up express

const express = require('express');
const app = express();
const port = 3000;

// Set up server

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

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
