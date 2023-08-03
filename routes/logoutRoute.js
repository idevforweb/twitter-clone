const express = require('express'); //  required modules
const app = express();
const router = express.Router(); // create router instance
const bodyParser = require('body-parser'); // Require body-parser
const bcrypt = require('bcrypt'); // Require bcrypt
const User = require('../schemas/UserSchema'); // Require UserSchema for use

app.use(bodyParser.urlencoded({ extended: false })); // Tell app to use body parser

// login get request

router.get('/', (req, res, next) => {
  // if the session is true
  if (req.session) {
    // End the session
    req.session.destroy(() => {
      // then redirect to login
      res.status(301).redirect('login');
    });
  }
});

// export router module

module.exports = router;
