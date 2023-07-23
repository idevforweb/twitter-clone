# Setting up project

Run "npm init"
Add start script in package.json
Run "git init"
Run touch .gitignore
In .gitignore add "node_modules/\*" to ignore module folder

# Installing express

In root dir > touch app.js"
npm install express

# Create Pug Templating

Set View Engine to pug
npm i pug
Run npm start, to start server
Set view engine
Tell server where to look for pug file in app.js
Create Views folder in root dir
create home.pug in views root dir
Create layouts dir in views roots dir
Create main-layout.pug in layouts dir

# Create Log in middleware

touch middleware.js in root dir
In middleware.js create widdleware.requireLogin()
Require middleware.js module in app.js
Add middleware to home route in app.js

# Add login route

In project root dir > mkdir routes
cd routes
touch loginRoutes.js
set up loginRoutes.js ( see code )
In app.js add Routes
Tell app to us loginRoutes

# Create login page and layout

- In views dir > touch login.pug
- In views/layouts dir > touch login-layout.pug
- In login.pug extend login-layout.pug
- See login.pug and login-layout.pug for steps

## Notes

Revise pug procedures
