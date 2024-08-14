const connection = require('../database/connection');
const { DataTypes } = require('sequelize');

let CategoryModel = connection.define("category", {
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'users',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
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