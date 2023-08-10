const express = require('express'); //  required modules
const app = express();
const router = express.Router(); // create router instance
const bodyParser = require('body-parser'); // Require body-parser
const User = require('../../schemas/UserSchema'); // Require UserSchema for use

app.use(bodyParser.urlencoded({ extended: false })); // Tell app to use body parser

router.get('/', (req, res, next) => {});

// api/post endpoint

router.post('/', async (req, res, next) => {
  // Handle bad request
  // if content is not sent from postArea submission
  if (!req.body.content) {
    console.log('Content Param not sent.');
    return res.sendStatus(400);
  }
  res.status(200).send('It worked!');
});

// export router module

module.exports = router;
