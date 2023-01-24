const UserDataAccess = require("../data-access/user");

const findUserByEmail = async (email) => {
  return await UserDataAccess.findUserByEmail(email);
};

const createUser = async ({ email, password, name }) => {
  return await UserDataAccess.createUser({ email, password, name });
};

const getAllUsers = async () => {
  return await UserDataAccess.getAllUsers();
};

const findUserById = async (id) => {
  return await UserDataAccess.findUserById(id);
};

module.exports = { findUserByEmail, createUser, getAllUsers, findUserById };
