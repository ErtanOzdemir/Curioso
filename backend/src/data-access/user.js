const UserModel = require("../db/user");

const findUserByEmail = async (email) => {
  return await UserModel.findOne({ email });
};

const createUser = async ({ email, password, name }) => {
  return await UserModel.create({ email, password, name });
};

const getAllUsers = async () => {
  return await UserModel.find();
};

const findUserById = async (id) => {
  return await UserModel.find({ _id: id });
};

module.exports = { findUserByEmail, createUser, getAllUsers, findUserById };
