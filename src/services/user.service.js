const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const AccessLog = require('../models/access.model');

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

const getLogs = async () => {
  return await AccessLog.find()
    .sort({ timestamp: -1 })
    .populate('userId', 'name email')
    .lean();
}

const deleteLogs = async () => {
  const cutoff = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const result = await AccessLog.deleteMany({ timestamp: { $lt: cutoff } });
  return result.deletedCount;
}

module.exports = {
  getUserById,
  updateUser,
  deleteUser,
  getLogs,
  deleteLogs,
};