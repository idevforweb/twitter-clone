/*

middleware modules

 */

// requireLogin module

exports.requireLogin = (req, res, next) => {
  // if registered user grant access to route
  if (req.session && req.session.user) {
    return next();
  } else {
    // redirect to login
    return res.redirect('./login');
  }
};
