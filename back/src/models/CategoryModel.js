const connection = require('../database/connection');
const { DataTypes } = require('sequelize');

let CategoryModel = connection.define("category", {
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    use_in_menu:{
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    }
});

module.exports = CategoryModel;