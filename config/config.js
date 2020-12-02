require("dotenv").config();
module.exports = {
  development: {
    url: process.env.ELEPHANT_SQL,
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    database: "DATABASE_URL",

    dialect: "postgres",
  },
};
