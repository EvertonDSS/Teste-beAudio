require("dotenv").config();

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Variável de ambiente obrigatória não encontrada: ${name}`);
  }
  return value;
}

module.exports = {
  development: {
    username: requiredEnv("DB_USER"),
    password: requiredEnv("DB_PASS"),
    database: requiredEnv("DB_NAME"),
    host: requiredEnv("DB_HOST"),
    dialect: "postgres",
  }
};
