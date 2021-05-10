const withAuth = (req, res, next) => {
  console.log("doing auth");
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  