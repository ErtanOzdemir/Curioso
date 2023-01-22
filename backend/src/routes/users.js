const express = require("express");
const { sessionChecker } = require("../middlewares/auth");
const router = express.Router();
const UserService = require("../services/user");
const { HTTP_ERRORS } = require("../utils/constants");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res, next) => {
  const { email, password, name } = req.body;

  if (!email || !name || !password) {
    return res
      .status(HTTP_ERRORS.BAD_REQUEST.CODE)
      .send("Some required fields are empty!");
  }

  const existedUser = await UserService.findUserByEmail(email);

  if (existedUser) {
    return res
      .status(HTTP_ERRORS.BAD_REQUEST.CODE)
      .send("There is a registered user with this e-mail!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await UserService.createUser({
    name,
    email,
    password: hashedPassword,
  });

  if (newUser) {
    req.session.userId = newUser._id;
  }

  return res.status(HTTP_ERRORS.OK.CODE).send(HTTP_ERRORS.OK.MESSAGE);
});

router.post("/login", async (req, res, next) => {});
router.post("/logout", async (req, res, next) => {
  req.session.destroy();
  res.redirect("/");
});

router.get("/me", sessionChecker, async (req, res, next) => {});

module.exports = router;
