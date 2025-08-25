const { AppError } = require("../errors/errors");

function errorHandler(err, req, res, next) {
  if (err instanceof AppError) {
    console.log(err);
    return res.status(err.statusCode).json({ message: err.message });
  }
  res.status(500).json({ message: "Erro interno no servidor" });
}

module.exports = errorHandler;
