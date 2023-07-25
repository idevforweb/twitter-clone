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

- Style login.pug page

# Create register page and register route

- root dir > cd views
- touch register.pug
- register.pug > Create register form ( see code )
- routes dir > touch registerRoutes.js
- Add code to registerRoutes.js ( see code )
- app.js > Add registerRouter instance
- app.js > Tell app to use register route instance

# Add password field form validation

- register.pug > add js script or use external js script for form validation
- See register.pug for code

# Add body parser

- npm i body-parser
- registRoutes.js > require body-parser library
- app.js > require body-parser library
- registRoutes.js > Tell app to use body parser
- app.js > Tell app to use body parser

# Check for empty fields

- registerRouter.js > get.post route > Add body parser variables
- registerRouter.js > get.post route > Add req.body to a payload
- registerRouter.js > get.post route > Check for empty fields using server side validation
- ( See if-block in registerRouter.js)
- register.js > Add values to specific input fields ( see file for notes )
- regiser.js > Add payload.errorMessage p element with class of .errorMessage

# todo

- learn about body parser for node.js
