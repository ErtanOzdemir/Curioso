const { HTTP_ERRORS } = require("../utils/constants");

const sessionChecker = (req, res, next) => {
  const userSession = req.session.userId;

  if (!userSession) {
    return res
      .status(HTTP_ERRORS.UNAUTHORIZED.CODE)
      .send(HTTP_ERRORS.UNAUTHORIZED.MESSAGE);
  }

  next();
};

module.exports = { sessionChecker };
