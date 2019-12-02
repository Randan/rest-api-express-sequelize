const Sequelize = require("sequelize");
const sequelize = require('../db');

const Subscriber = sequelize.define("subscriber", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    subscribedChannel: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Subscriber;