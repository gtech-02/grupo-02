const connection = require('../database/connection');
const { DataTypes } = require('sequelize');
const ProductModel = require('./ProductModel');

let ImageModel = connection.define("Image", {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'products',
            key: 'id'
        },
        onDelete: 'CASCADE'

    }, enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0

    }, path: {
        type: DataTypes.STRING(200),
        allowNull: false
    }
    });

    module.exports = ImageModel;