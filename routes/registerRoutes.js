//  required modules

const express = require('express');
const app = express();

// create router instance

const router = express.Router();

// Set View Engine
// Tell server where to look for pug files

app.set('view engine', 'pug');
app.set('views', 'views');

router.get('/', (req, res, next) => {
  res.status(200).render('register');
});

// export router module

module.exports = router;
