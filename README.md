# Setting up project

Run "npm init"
Add start script in package.json
Run "git init"
Run touch .gitignore
In .gitignore add "node_modules/\*" to ignore module folder

# Installing express

touch app.js"
npm install express"
Set View Engine to pug
npm i pug
Tell server where to loof for pug file
Create Views folder
create home.pug in views
Create layouts folder in views
Create main-layout.pug in layouts

# Registration Log in

Create middleware.js in root folder
Using middleware.js create widdleware.requireLogin
Require middleware in app.js
add middleware to home route in app.js
