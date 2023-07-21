exports.requireLogin = (req, res, next) => {
  // redirect if not a user
  if (req.session && req.session.user) {
    return next();
  } else {
    return res.redirect('./login');
  }
};
