const connection = require('../database/connection');
const { DataTypes } = require('sequelize');
const ProductModel = require('./ProductModel');
const CategoryModel = require('./CategoryModel');

const ProductCategoryModel = connection.define("ProductCategory", {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ProductModel,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: CategoryModel,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
});

module.exports = ProductCategoryModel;