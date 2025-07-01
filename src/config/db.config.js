const mongoose = require("mongoose");
const { appConfig } = require("./env.config");

const connectDB = async () => {
  try {
    const connectOptions = {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000, // Tempo limite em milissegundos para um socket inativo
    };

    await mongoose.connect(appConfig.mongoURI, connectOptions);

    console.log("MongoDB Conectado com sucesso!");
  } catch (err) {
    console.error("Erro ao conectar ao MongoDB:");
    console.error(`Detalhes: ${err.message}`);
    // Logar o stack trace apenas em ambiente de desenvolvimento para depuração
    if (process.env.NODE_ENV !== "production") {
      console.error(err.stack);
    }
    process.exit(1);
  }
};

module.exports = connectDB;