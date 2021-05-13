const withAuth = (req, res, next) => {
  console.log("doing auth");
  console.log(req.session);
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  