//  Set up express

const express = require('express');
const app = express();
const port = 3000;

const middleware = require('./middleware'); // Require middleware.js

// Run server

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.set('view engine', 'pug'); // Set View Engine to pug
app.set('views', 'views'); // Tell server where to look for pug files

const loginRoute = require('./routes/loginRoutes'); // Add loginRoutes to app

app.use('/login', loginRoute); // Use login routes

// Home route

app.get('/', middleware.requireLogin, (req, res, next) => {
  let payload = {
    pageTitle: 'home',
  };
  res.status(200).render('home', payload);
});
