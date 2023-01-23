const RoomModel = require("../db/room");

const createRoom = async ({ creator, title, link }) => {
  return await RoomModel.create({ creator, title, link });
};

module.exports = { createRoom };
