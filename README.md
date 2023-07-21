# Setting up project

Run "npm init"
Add start script in package.json
Run "git init"
Run touch .gitignore
In .gitignore add "node_modules/\*" to ignore module folder

# Installing express

touch app.js"
npm install express

# Create Pug Templating

Set View Engine to pug
npm i pug
Run server
Tell server where to look for pug file
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

## Notes

Revise pug procedures
