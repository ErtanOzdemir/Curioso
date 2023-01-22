const UserModel = require("../db/user");

const findUserByEmail = async (email) => {
  return await UserModel.findOne({ email });
};

const createUser = async ({ email, password, name }) => {
  return await UserModel.create({ email, password, name });
};

module.exports = { findUserByEmail, createUser };
