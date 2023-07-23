# Setting up project

- Run "npm init"
- Add start script in package.json
- Run "git init"
- In root dir > touch .gitignore
- In .gitignore > add "node_modules/\*" to ignore module folder

# Installing express

- In root dir > touch app.js"
- In Terminal > npm i express
- Set up express
- Set up server

# Create Pug Templating

- Terminal > npm i pug
- In app.js set view engine to pug
- In app.js set views folder : Tell server where to look for pug file in app.js
- cd root > mkdir views
- cd views dir > home.pug && mkdir layouts
- cd views/layouts > touch main-layout.pug

# Create Log in middlewaren module

- cd root > touch middleware.js
- In middleware.js create widdleware.requireLogin()
- Require middleware.js module in app.js

# Add login route

- cd root dir > mkdir routes
- cd routes
- touch loginRoutes.js
- set up loginRoutes.js ( see code )
- In app.js add loginRoute instance
- In app.js Tell app to use loginRoutes
- In app.js add requireLogin module middleware to home route in app.js

# Create login page and layout

- In views dir > touch login.pug
- In views/layouts dir > touch login-layout.pug
- In login.pug extend login-layout.pug
- See login.pug and login-layout.pug for steps
