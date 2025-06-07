const authService = require('../services/auth.service');
const errorMiddleware = require('../middleware/error.middleware');
const AppError = errorMiddleware.AppError;

async function register(req, res, next) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return next(new AppError('Por favor, preencha todos os campos.', 400));
    }

    const newUser = await authService.registerUser({ name, email, password });

    res.status(201).json({
      message: 'Usuário registrado com sucesso!',
      userId: newUser._id,
      email: newUser.email,
    });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new AppError('Por favor, forneça email e senha.', 400));
    }

    const token = await authService.loginUser(email, password);

    res.status(200).json({
      message: 'Login bem-sucedido!',
      token,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  register,
  login,
};