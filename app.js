const express = require('express'); // Set up express
const app = express();
const port = 3000;
const middleware = require('./middleware'); // Require middleware module
const path = require('path'); // Require path library
const bodyParser = require('body-parser'); // Require body-parser library
const mongoose = require('./database'); // Require Database module
const session = require('express-session'); // Require express-sessions

// Set up server

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.set('view engine', 'pug'); // Set view engine to pug
app.set('views', 'views'); // Set views folder : Tell server where to look for pug files

app.use(bodyParser.urlencoded({ extended: false })); // Tell app to use body parser

/* Serving Static files */

app.use(express.static(path.join(__dirname, 'public'))); // Add path to public folder

// Set app to use sessions

app.use(
  session({
    // Secrets are used to hash sessions
    secret: 'this is a secret session can be anything',
    resave: true,
    saveUninitialized: false,
  })
);

// Require Router Instances

const loginRoute = require('./routes/loginRoutes'); // Add loginRoute instance
const registerRoute = require('./routes/registerRoutes'); // Add registerRoute instance
const logoutRoute = require('./routes/logoutRoute'); // Add logoutRoute instance

// Use routes

app.use('/login', loginRoute); // Tell app to use login route
app.use('/register', registerRoute); // Tell app to use register route
app.use('/logout', logoutRoute); // Tell app to use logout route

// Home route

app.get('/', middleware.requireLogin, (req, res, next) => {
  // home.pug template properties
  let payload = {
    pageTitle: 'Home',
    // Get the session user data from registerRoutes.js
    userLoggedIn: req.session.user,
  };
  res.status(200).render('home', payload);
});
