const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const { AppError } = require('./error.middleware');
const { appConfig } = require('../config/env.config');

async function protect(req, res, next) {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new AppError('Você não está logado! Por favor, faça login para ter acesso.', 401));
  }

  try {
    const decoded = jwt.verify(token, appConfig.jwtSecret);
    const currentUser = await User.findById(decoded.id);

    if (!currentUser) {
      return next(new AppError('O usuário pertencente a este token não existe mais.', 401));
    }

    req.user = currentUser;
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return next(new AppError('Token inválido. Por favor, faça login novamente.', 401));
    }
    if (error.name === 'TokenExpiredError') {
      return next(new AppError('Seu token expirou! Por favor, faça login novamente.', 401));
    }
    next(error);
  }
}

function isAdmin(req, res, next) {
  if (!req.user || req.user.role !== 'admin') {
    return next(new AppError('Acesso negado: apenas administradores podem realizar esta ação.', 403));
  }
  next();
}

function isSuperAdmin(req, res, next) {
  if (!req.user || !req.user.isSuperAdmin) {
    return next(new AppError('Acesso negado: apenas o superadmin pode realizar esta ação.', 403));
  }
  next();
}

module.exports = {
  protect,
  isAdmin,
  isSuperAdmin
};