const express = require("express");
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
    req.session.payload = {
      userId: newUser._id,
      isAuth: true,
    };
  }

  return res.status(HTTP_ERRORS.OK.CODE).send(HTTP_ERRORS.OK.MESSAGE);
});

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(HTTP_ERRORS.BAD_REQUEST.CODE)
      .send("Some required fields are empty!");
  }

  const user = await UserService.findUserByEmail(email);

  if (!user) {
    return res
      .status(HTTP_ERRORS.BAD_REQUEST.CODE)
      .send("There isn't any registered user with this e-mail!");
  }

  const isPasswordMatched = await bcrypt.compare(password, user.password);

  if (isPasswordMatched) {
    req.session.payload = {
      userId: user._id,
      isAuth: true,
    };
    return res.json(req.session);
  }
  return res
    .status(HTTP_ERRORS.BAD_REQUEST.CODE)
    .send("Password doesn't match");
});

router.post("/logout", async (req, res, next) => {
  req.session.destroy();
  res.redirect("/");
  return res.status(HTTP_ERRORS.OK.CODE).send(HTTP_ERRORS.OK.MESSAGE);
});

module.exports = router;
