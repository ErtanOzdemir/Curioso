const UserDataAccess = require("../data-access/user");

const findUserByEmail = async (email) => {
  return await UserDataAccess.findUserByEmail(email);
};

const createUser = async ({ email, password, name }) => {
  return await UserDataAccess.createUser({ email, password, name });
};

module.exports = { findUserByEmail, createUser };
