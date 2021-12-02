const usersRepo = require('./user.memory.repository');
const userModel = require("./user.model");

const getAll = () =>
  usersRepo.getAll();

const addUser = ({ login, name, password }) => {
  const createdUser = new userModel.User({login, name, password});

  usersRepo.addUser(createdUser);

  return createdUser;
}

const deleteUser = (userId) => usersRepo.deleteUser(userId);

const getUserById = (userId) =>
  usersRepo.getUserById(userId);

const updateUser = (newFields) => usersRepo.updateUser(newFields);

module.exports = {
  getAll,
  addUser,
  getUserById,
  deleteUser,
  updateUser,
};
