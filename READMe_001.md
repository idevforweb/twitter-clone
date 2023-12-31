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
- See login.pug and login-layout.pug for set up

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

- registerRouter.js > get.post route > Add body parsed variables for validation checking
- registerRouter.js > get.post route > Add req.body to a payload
- registerRouter.js > get.post route > Check for empty fields using server side validation
- ( See if-block in registerRouter.js)
- register.js > Add values to specific input fields ( see file for notes )
- regiser.js > Add payload.errorMessage p element with class of .errorMessage

# Set up MongoDB Database

- Mongodb.com > Create project
- Create Cluster
- Go thru basic Database set up
- root dir > npm i mongodb mongoose

# Create reusable database connection

- root dir > touch database.js
- database.js > Require mongoose library
- database.js > Create Database class (see file for class build)
- app.js > Require database module

# Create User Schema Mongoose

- root dir > mkdir schemas && cd schemas
- schemas dir > touch UserSchema.js
- Note: Create one schema per collection
- UserSchema.js > require mongoose
- ( See UserSchema.js for code )

# Add UserSchema in registerRoute.js

- registerRoutes.js > Require UserSchema for use

# Check if username or emails are already in use

- registerRoutes.js >
- Check usernames or emails using User Schema and mongoDB $or condition ( see code )
- Add async to router.post
- Add conditions if user is already in use

# Inserting a user into the collection

- registerRoutes.js >
- Get all fields user entered
- Use mongoDB create method ( returns promise )

# Adding timestamps to our data

- UserSchema.js >
- Set Schema Time Stamp option

# Hash the password using bcrypt

- root dir > npm i bcrypt
- registerRoutes.js >
- Require bcrypt
- Add bcrypt to hash password

# Creating Sessions

- npm i express-session
- app.js >
- Require express-session
- Set app to use sessions
- registerRoutes.js >
- Store logged in user in the session property
- Redirect user to home page or root level of the site

# Passing Logged in user to the client

- app.js > home route > update payload > Get the session user data from registerRoutes.js

# Logging in

- loginRoutes.js > Update loginRoute.js > See Code
- login.pug > see code
