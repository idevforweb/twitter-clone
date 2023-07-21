//  Set up

const express = require('express');
const app = express();
const port = 3003;

// Run server

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Set View Engine
// Tell server where to look for pug files

app.set('view engine', 'pug');
app.set('views', 'views');

app.get('/', (req, res, next) => {
  let payload = {
    pageTitle: 'home',
  };
  res.status(200).render('home', payload);
});
