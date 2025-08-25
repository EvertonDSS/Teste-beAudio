require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "senha",
    database: process.env.DB_NAME || "todo_app",
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
  },
  test: {
    username: process.env.DB_USER_TEST || "root",
    password: process.env.DB_PASS_TEST || null,
    database: process.env.DB_NAME_TEST || "database_test",
    host: process.env.DB_HOST_TEST || "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USER_PROD || "root",
    password: process.env.DB_PASS_PROD || null,
    database: process.env.DB_NAME_PROD || "database_production",
    host: process.env.DB_HOST_PROD || "127.0.0.1",
    dialect: "mysql",
  },
};
