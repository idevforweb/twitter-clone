//  required modules
const express = require('express'); // Require express
const app = express(); // create Express app
const router = express.Router(); // create router instance
const bodyParser = require('body-parser'); // Require body parser libray
const bcrypt = require('bcrypt'); // Require bcrypt
const User = require('../schemas/UserSchema'); // Require UserSchema for use

app.set('view engine', 'pug'); // Set View Engine
app.set('views', 'views'); // Tell server where to look for pug files

app.use(bodyParser.urlencoded({ extended: false })); // Tell app to use body parser

// Add Register main route : Get Request

router.get('/', (req, res, next) => {
  res.status(200).render('register');
});

// Add Register Post request
// Add async to router.post

router.post('/', async (req, res, next) => {
  // Add body parsed variables for validation checking
  const firstName = req.body.firstName.trim(); // Trim : remove white spaces
  const lastName = req.body.lastName.trim();
  const username = req.body.username.trim();
  const email = req.body.email.trim();
  const password = req.body.password;

  // Add request body to a payload

  let payload = req.body;

  // Check for empty fields using server side validation
  // Check if all fields are true and valid

  if (firstName && lastName && username && email && password) {
    let user = await User.findOne({
      // Check usernames or emails using User Schema and mongoDB $or condition
      // Note: using await, code will wait for query to finish and not continue
      $or: [{ username: username }, { email: email }],
    }).catch((error) => {
      // Add catch error
      console.log(error);
      // Append error messages to payload
      payload.errorMessage = 'Make sure each field has a valid value.';
      res.status(200).render('register', payload);
    });

    // Add conditions if user is already in use or not

    if (user == null) {
      // If no user is found create one
      let userData = req.body; // Get all fields user entered

      // Add bcrypt to hash password
      // bcrypt takes two parameters (password to hash, encryption level)
      // we use 10 for high hash security, higher the number more security

      userData.password = await bcrypt.hash(password, 10);

      // Use mongoDB create method ( returns promise )

      await User.create(userData)
        .then((user) => {
          req.session.user = user; // Store registered user in the session
          return res.redirect('/'); // Redirect User redirect user
        })
        .catch((error) => {
          console.log(error);
          payload.errorMessage = `Sorry an unexpected error occured. ${error}`;
          res.status(200).render('register', payload);
        });
    } else {
      // User found
      if (email == user.email) {
        // if email submitted is found in database.
        // append error message to payload
        payload.errorMessage = 'User already in use.';
      } else {
        // if username submitted is found in database.
        // append error message to payload
        payload.errorMessage = 'User already in use.';
      }

      // Render new payload
      res.status(200).render('register', payload);
    }
  } else {
    // Append error message to payload

    payload.errorMessage = 'Make sure each field has a valid value.';
    res.status(200).render('register', payload);
  }
});

// export router module

module.exports = router;
