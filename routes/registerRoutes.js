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
  // Test out body parser gather info
  console.log(req.body);
  res.status(200).render('register');
});

// export router module

module.exports = router;
