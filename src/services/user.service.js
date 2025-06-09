const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const getUserById = async (id) => {
  const user = await User.findById(id);
  return user;
};

const updateUser = async (userId, userData) => {
  const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true });
  return updatedUser;
};

const deleteUser = async (userId) => {
  const deletedUser = await User.findByIdAndDelete(userId);
  return deletedUser;
};

module.exports = {
  getUserById,
  updateUser,
  deleteUser,
};
