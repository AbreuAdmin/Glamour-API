const redis = require('redis');
const { AppError } = require('./error.middleware');

const redisClient = redis.createClient();
redisClient.connect().catch(console.error);

const ACCESS_LOG_PREFIX = 'access_log';

async function accessLogger(req, res, next) {
  try {
    const identifier = req.user?.id
      ? `user_${req.user.id}`
      : `ip_${req.ip || req.connection.remoteAddress}`;

    const key = `${ACCESS_LOG_PREFIX}:${identifier}`;

    const accessData = {
      path: req.originalUrl,
      method: req.method,
      timestamp: new Date().toISOString()
    };

    // TTL de 24 horas (86400 segundos)
    await redisClient.setEx(key, 86400, JSON.stringify(accessData));
  } catch (err) {
    console.error('Erro ao registrar acesso no Redis:', err);
    // Não bloqueia a requisição, apenas registra o erro
  }

  next();
}

module.exports = accessLogger;