const express = require('express'); // Set up express
const app = express();
const port = 3000;
const middleware = require('./middleware'); // Require middleware module
const path = require('path'); // Require path library
const bodyParser = require('body-parser'); // Require body-parser library
const mongoose = require('./database'); // Require Database module
const session = require('express-session'); // Require express-sessions

// const jsdom = require('jsdom');
// const dom = new jsdom.JSDOM('');
// const jquery = require('jquery')(dom.window);

// const ur
// Set up server

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.set('view engine', 'pug'); // Set view engine to pug
app.set('views', 'views'); // Set views folder : Tell server where to look for pug files

app.use(bodyParser.urlencoded({ extended: false })); // Tell app to use body parser

/* Serving Static files */

app.use(express.static(path.join(__dirname, 'public'))); // Add path to public folder
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist/'))); // Bootstrap
app.use(express.static(path.join(__dirname, 'node_modules/jquery/dist'))); // Add jquery path
app.use(
  // Add Fontawesome path
  express.static(
    path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free')
  )
);

// Set app to use sessions

app.use(
  session({
    // Secrets are used to hash sessions
    secret: 'this is a secret session can be anything',
    resave: true,
    saveUninitialized: false,
    cookie: {
      // Session expires after allocated time from inactivtity
    },
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

// Api Routes

const postsApiRoute = require('./routes/api/posts');

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
