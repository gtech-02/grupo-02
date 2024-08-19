const connection = require('../database/connection');
const { DataTypes } = require('sequelize');

let UserModel = connection.define("users", {
    firstname: {
        type: DataTypes.STRING(50),
        allowNull: false, 
    }, 
    surname: {
        type: DataTypes.STRING(50),
        allowNull: false
    }, 
    email: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
});

module.exports = UserModel;