const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/signup-login');
    } else {
      next();
    }
  };
  
module.exports = withAuth;