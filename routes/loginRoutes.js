//  required modules

const express = require('express');
const app = express();
const router = express.Router();

// Set View Engine
// Tell server where to look for pug files

app.set('view engine', 'pug');
app.set('views', 'views');

// Route with middleware

router.get('/', (req, res, next) => {
  res.status(200).render('login');
});

module.exports = router;
