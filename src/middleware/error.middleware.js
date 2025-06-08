class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode || 500;
    this.isOperational = true;  // Marca como erro operacional
    Error.captureStackTrace(this, this.constructor);  // Para evitar loops de stack trace
  }
}

const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = { AppError, errorMiddleware };
