# Setting up project

- Run "npm init"
- Make entry point app.js
- npm i nodemon
- Add start script in package.json
- Run "git init"
- In root dir > touch .gitignore
- In .gitignore > add "node_modules/\*" to ignore module folder

# Installing express

- In root dir > touch app.js if not created
- In Terminal > npm i express
- app.js > Set up express
- app.js > Set up server

```
  Set up express
  Set up Server

```

# Create Pug Templating

- Terminal > npm i pug
- In app.js set view engine to pug
- In app.js set views folder : Tell server where to look for pug file in app.js
- cd root > mkdir views
- cd views dir > home.pug && mkdir layouts
- cd views/layouts > touch main-layout.pug

# Create Log in middleware module

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

# Add Bootstrap and jQuery

- Get Bootstrap and jQuery CDN's
- Add links to main-layout.pug and login-layout.pug
- Add scripts to main-layout.pug and login-layout.pug

# Serving Static files

- cd root > mkdir public > cd public > mkdir css
- touch login.css
- app.js > add require path library
- app.js > app path to public folder
- login-layout.pug > link stylesheet login.css or any other doc needed

# Adding css

- npm start
- In browser navigate to desired page
- Open up developer tools
- Select Sources > Ctrl + P
- From list select desired page and edit css to view in real time
- Or choose "Element" > select element tag > edit in panel
- Make CSS styles ( have fun )
- copy paste to project CSS file

# Style login page

- Style login page
