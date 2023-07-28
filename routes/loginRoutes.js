const express = require('express'); //  required modules
const app = express();
const router = express.Router(); // create router instance
const bodyParser = require('body-parser'); // Require body-parser
const bcrypt = require('bcrypt'); // Require bcrypt
const User = require('../schemas/UserSchema'); // Require UserSchema for use

app.set('view engine', 'pug'); // Set View Engine
app.set('views', 'views'); // Tell server where to look for pug files

app.use(bodyParser.urlencoded({ extended: false })); // Tell app to use body parser

// login get request

router.get('/', (req, res, next) => {
  res.status(200).render('login');
});

// login post request

router.post('/', async (req, res, next) => {
  // const loginUsername = req.body.logUsername.trim();
  // console.log(loginUsername);

  let payload = req.body; // get payload

  // if username and password both filled out
  if (req.body.logUsername && req.body.logPassword) {
    let user = await User.findOne({
      // Check usernames or emails using User Schema and mongoDB $or condition
      // Note: using await, code will wait for query to finish and not continue
      $or: [
        { username: req.body.logUsername },
        { email: req.body.logUsername },
      ],
    }).catch((error) => {
      // Add catch error
      console.log(error);
      payload.errorMessage = `An unexpected error occured. ${error}`; // Append error messages to payload
      res.status(200).render('login', payload);
    });

    // if user is not null and found

    if (user != null) {
      // check for password in db
      let result = await bcrypt.compare(req.body.logPassword, user.password); // compare pw entered to pw in db
      // if pw matches and the user is in db
      if (result === true) {
        req.session.user = user; // Start session with logged in user
        return res.redirect('/'); // redirect after login
      }
    }

    // if username or password didnt match
    payload.errorMessage = 'Username or password incorrect.'; // Append error message to payload
    return res.status(200).render('login', payload); // render payload status on login page
  }

  payload.errorMessage = 'Make sure each field has a valid value.'; // Append error message to payload
  res.status(200).render('login');
});

// export router module

module.exports = router;
