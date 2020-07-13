/* ----------------------- demo do a simple middleware ---------------------- */

const { validationResult } = require("express-validator");

module.exports = {
  // ! middleware function
  handleErrors(templateFunc, cbMethod) {
    return async (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        // if the cbMethod have any value we can get data product from callback
        let data = {};
        if (cbMethod) {
          data = await cbMethod(req);
        }
        return res.send(templateFunc({ errors, ...data }));
      }

      next();
    };
  },

  requireAuth(req, res, next) {
    if (!req.session.userID) {
      return res.redirect("/signin");
    }

    next();
  },
};
