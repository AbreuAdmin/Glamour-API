const userService = require('../services/user.service');
const errorMiddleware = require('../middleware/error.middleware');
const AppError = errorMiddleware.AppError;

const getAllUsers = async (req, res, next) => {
  try {
    if (!req.user || req.user.role !== 'admin') {
      return next(new AppError('Apenas administradores podem realizar esta ação.', 403));
    }
    
    const users = await userService.getAllUsers();
    res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    if (!req.user || req.user.role !== 'admin') {
      return next(new AppError('Apenas administradores podem realizar esta ação.', 403));
    }

    const user = await userService.getUserById(req.params.id);
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    if (!req.user || req.user.role !== 'admin') {
      return next(new AppError('Apenas administradores podem realizar esta ação.', 403));
    }

    const user = await userService.updateUser(req.params.id, req.body);
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    if (!req.user || req.user.role !== 'admin') {
      return next(new AppError('Apenas administradores podem realizar esta ação.', 403));
    }

    const user = await userService.deleteUser(req.params.id);
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

const getAllLogs = async (req, res, next) => {
  try {
    if (!req.user || req.user.role !== 'admin') {
      return next(new AppError('Apenas administradores podem realizar esta ação.', 403));
    }

    const acessos = await userService.getLogs();
    res.status(200).json({ acessos });
  } catch (error) {
    next(error);
  }
};

const deleteLogs = async (req, res, next) => {
  try {
    if (!req.user || req.user.role !== 'admin') {
      return next(new AppError('Apenas administradores podem realizar esta ação.', 403));
    }

    const deletedCount = await userService.deleteLogs();
    res.status(200).json({
      message: `Foram removidos ${deletedCount} acessos antigos removidos.`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getAllLogs,
  deleteLogs,
};