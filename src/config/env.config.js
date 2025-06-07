require('dotenv').config();

const appConfig = {
  port: process.env.PORT || 3333,
  apiVersion: process.env.API_VERSION || "v1",
  jwtSecret: process.env.JWT_SECRET || "sua_chave_secreta_jwt_padrao_tts_jkst",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "1h",
  mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/seu_banco_de_dados",
};

module.exports = { appConfig };