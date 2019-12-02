require('dotenv').config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    process.env.DATABASE_BASENAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASS,
    {
        dialect: process.env.DATABASE_DIALECT,
        host: process.env.DATABASE_URL,
        port : process.env.DATABASE_PORT
    }
);

module.exports = sequelize;