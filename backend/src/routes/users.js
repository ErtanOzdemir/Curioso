const express = require("express");
const { sessionChecker } = require("../middlewares/auth");
const router = express.Router();
const UserService = require("../services/user");

router.get("/", sessionChecker, async (req, res, next) => {
  const allUsers = await UserService.getAllUsers();

  return res.json(allUsers);
});

router.get("/:userId", sessionChecker, async (req, res, next) => {
  const { userId } = req.params;

  const user = await UserService.findUserById(userId);

  return res.json(user);
});

router.get("/me", sessionChecker, async (req, res, next) => {
  const user = await UserService.findUserById(req.session.payload.userId);

  return res.json(user);
});

module.exports = router;
