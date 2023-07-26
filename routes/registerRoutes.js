//  required modules

const express = require('express');
const app = express();

// Require body parser libray

const bodyParser = require('body-parser');

// Require UserSchema for use

const User = require('../schemas/UserSchema');

// create router instance

const router = express.Router();

// Set View Engine
// Tell server where to look for pug files

app.set('view engine', 'pug');
app.set('views', 'views');

// Tell app to use body parser

app.use(bodyParser.urlencoded({ extended: false }));

// Add Register get request

router.get('/', (req, res, next) => {
  res.status(200).render('register');
});

// Add Register Post request
// Add async to router.post
router.post('/', async (req, res, next) => {
  // Add body parsed variables for validation checking
  const // Note: Trim will remove any white spaces before or after value
    firstName = req.body.firstName.trim(),
    lastName = req.body.lastName.trim(),
    username = req.body.username.trim(),
    email = req.body.email.trim(),
    password = req.body.password;

  // Add request body to a payload

  const payload = req.body;

  // Check for empty fields using server side validation
  // Check if all fields are true and valid

  if (firstName && lastName && username && email && password) {
    // Check usernames or emails using User Schema and mongoDB $or condition
    // Note: using await, code will wait for query to finish and not continue

    let user = await User.findOne({
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
      const userData = req.body; // Get all fields user entered
      // Use mongoDB create method ( returns promise )
      await User.create(userData)
        .then((addedUser) => {
          console.log(addedUser);
        })
        .catch((error) => {
          payload.errorMessage = 'Sorry an unexpected error occured.';
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
