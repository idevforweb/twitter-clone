//  required modules

const express = require('express');
const app = express();

// Require body parser libray

const bodyParser = require('body-parser');

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

router.post('/', (req, res, next) => {
  const // Add body parser in to variables
    // Trim will remove any white spaces before or after value
    firstName = req.body.firstName.trim(),
    lastName = req.body.lastName.trim(),
    username = req.body.username.trim(),
    email = req.body.email.trim(),
    password = req.body.password;

  // Add request body to a payload

  const payload = req.body;

  // Check for empty fields using server side validation

  if (firstName && lastName && username && email && password) {
    // Check if all fields are true and valid
    console.log(payload);
  } else {
    payload.errorMessage = 'Make sure each field has a valid value.';
    res.status(200).render('register', payload);
  }
});

// export router module

module.exports = router;
