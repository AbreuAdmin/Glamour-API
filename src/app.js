const express = require('express');
const connectDB = require('./config/db.config');
const cors = require('cors');
const { appConfig } = require('./config/env.config');
const mainRoutes = require('./routes');
const { errorMiddleware } = require('./middleware/error.middleware');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(`/api/${appConfig.apiVersion}`, mainRoutes);

app.get(`/api/${appConfig.apiVersion}`, (req, res) => {
  res.status(200).json({
    message: 'API RESTful está funcionando!',
    version: appConfig.apiVersion,
  });
});

app.use((req, res, next) => {
  const error = new Error(`Pagina não encontrada - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

app.use(errorMiddleware);

module.exports = app;