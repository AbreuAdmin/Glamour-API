const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const { AppError } = require('../middleware/error.middleware');
const { appConfig } = require('../config/env.config');

async function registerUser(userData) {
  const { username, email, password } = userData;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new AppError('O email já está em uso.', 409);
  }

  const newUser = new User({ username, email, password });
  await newUser.save();

  return newUser;
}

async function loginUser(email, password) {
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    throw new AppError('Email ou senha inválidos.', 401);
  }

  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    throw new AppError('Email ou senha inválidos.', 401);
  }

  const token = generateToken(user._id, user.role);

  return token;
}

function generateToken(userId, role) {
  return jwt.sign({ id: userId, role: role }, appConfig.jwtSecret, {
    expiresIn: appConfig.jwtExpiresIn || '1h',
  });
}

module.exports = {
  registerUser,
  loginUser,
  generateToken,
};