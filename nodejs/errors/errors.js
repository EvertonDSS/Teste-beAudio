class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
  }
}

class NotFoundError extends AppError {
  constructor(message = "Recurso não encontrado") {
    super(message, 404);
  }
}

class BadRequestError extends AppError {
  constructor(message = "Dados inválidos") {
    super(message, 400);
  }
}

class InternalServerError extends AppError {
  constructor(message = "Erro interno no servidor") {
    super(message, 500);
  }
}

module.exports = { AppError, NotFoundError, BadRequestError, InternalServerError };
