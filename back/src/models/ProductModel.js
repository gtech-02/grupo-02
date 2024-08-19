const connection = require('../database/connection');
const { DataTypes } = require('sequelize');


const ProductModel = connection.define("Product", {
    enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,

    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    use_in_menu: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    description: {
        type: DataTypes.STRING(255),
    },
    price: {
        type: DataTypes.FLOAT(5,2),
        allowNull: false,
    },
    price_with_discount: {
        type: DataTypes.FLOAT(5,2),
        allowNull: false,
    }
});

module.exports = ProductModel;