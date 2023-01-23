const RoomDataAccess = require("../data-access/room");

const createRoom = async ({ creator, title, link }) => {
  return await RoomDataAccess.createRoom({ creator, title, link });
};

module.exports = { createRoom };
