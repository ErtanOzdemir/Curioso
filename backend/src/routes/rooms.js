const express = require("express");
const { sessionChecker } = require("../middlewares/auth");
const router = express.Router();
const { HTTP_ERRORS } = require("../utils/constants");
const RoomService = require("../services/room");

router.post("/", sessionChecker, async (req, res, next) => {
  const { link, title } = req.body;

  try {
    const room = await RoomService.createRoom({
      link,
      title,
      creator: req.session.userId,
    });
    return res.json(room);
  } catch (error) {
    res.status(HTTP_ERRORS.BAD_REQUEST).send("Something went wrong!");
  }
});

module.exports = router;
